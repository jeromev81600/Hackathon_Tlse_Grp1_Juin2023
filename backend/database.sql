SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=1;

-- -----------------------------------------------------

-- Schema hackathon2

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `hackathon2` DEFAULT CHARACTER SET utf8 ;

USE `hackathon2` ;

-- -----------------------------------------------------

-- Table `hackathon2`.`user`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `firstname` VARCHAR(45) NOT NULL,
        `lastname` VARCHAR(45) NOT NULL,
        `email` VARCHAR(45) NOT NULL,
        `phone` VARCHAR(45) NULL,
        `hashed_password` VARCHAR(45) NULL,
        `is_admin` TINYINT(1) NOT NULL,
        `factory` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

INSERT INTO
    `hackathon2`.`user` (
        firstname,
        lastname,
        email,
        hashed_password,
        is_admin,
        factory
    )
VALUES (
        'jerome',
        'vilanova',
        'jerome.vilanova@wcs.com',
        '',
        1,
        'Gaillac'
    ), (
        'Antoine',
        'Jullian',
        'Anté@wcs.com',
        '',
        1,
        'Toulouse'
    );

-- -----------------------------------------------------

-- Table `hackathon2`.`brand`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`brand` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `brand` VARCHAR(45) NOT NULL,
        `picture_brand` VARCHAR(100) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `hackathon2`.`model`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`model` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `model` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `hackathon2`.`operating_system`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`operating_system` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `operating_system` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `hackathon2`.`screen`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`screen` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `screen` VARCHAR(45) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `hackathon2`.`network`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`network` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `network` INT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `hackathon2`.`stockage`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`stockage` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `stockage` INT NOT NULL,
        `cost_stockage` INT NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `hackathon2`.`ram`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`ram` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `ram` INT NOT NULL,
        `cost_ram` INT NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `hackathon2`.`weighting`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`weighting` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `weighting` INT NOT NULL,
        `cost_weighting` INT NOT NULL,
        `state` VARCHAR(45) NOT NULL,
        `weightingcol` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `hackathon2`.`smartphone`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`smartphone` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `user_id` INT NOT NULL,
        `picture_phone` VARCHAR(100) NOT NULL,
        `reserve` TINYINT(1) NOT NULL,
        `created_date` DATE NOT NULL,
        `has_charger` TINYINT(0) NOT NULL,
        `weighted_total` INT NOT NULL,
        `brand_id` INT NOT NULL,
        `imei` VARCHAR(45) NULL,
        `model_id` INT NOT NULL,
        `operating_system_id` INT NOT NULL,
        `sreen_id` INT NOT NULL,
        `network_id` INT NOT NULL,
        `stockage_id` INT NOT NULL,
        `ram_id` INT NOT NULL,
        `weighting_id` INT NOT NULL,
        `price` DECIMAL NOT NULL,
        PRIMARY KEY (
            `id`,
            `user_id`,
            `brand_id`,
            `model_id`,
            `operating_system_id`,
            `sreen_id`,
            `network_id`,
            `stockage_id`,
            `ram_id`,
            `weighting_id`
        ),
        CONSTRAINT `fk_telephone_user` FOREIGN KEY (`user_id`) REFERENCES `hackathon2`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_telephone_brand` FOREIGN KEY (`brand_id`) REFERENCES `hackathon2`.`brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_telephone_model` FOREIGN KEY (`model_id`) REFERENCES `hackathon2`.`model` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_telephone_operating_system` FOREIGN KEY (`operating_system_id`) REFERENCES `hackathon2`.`operating_system` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_telephone_screen` FOREIGN KEY (`sreen_id`) REFERENCES `hackathon2`.`screen` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_telephone_network` FOREIGN KEY (`network_id`) REFERENCES `hackathon2`.`network` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_telephone_stockage` FOREIGN KEY (`stockage_id`) REFERENCES `hackathon2`.`stockage` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_telephone_ram` FOREIGN KEY (`ram_id`) REFERENCES `hackathon2`.`ram` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_telephone_weighting` FOREIGN KEY (`weighting_id`) REFERENCES `hackathon2`.`weighting` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

SET SQL_MODE=Traditional;

SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;