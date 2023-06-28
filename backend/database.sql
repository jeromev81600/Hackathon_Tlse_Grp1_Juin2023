-- -----------------------------------------------------

-- Schema hackathon2

-- -----------------------------------------------------

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
        `hashed_password` VARCHAR(45) NOT NULL,
        `is_admin` TINYINT(1) NOT NULL,
        `factory` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Insert `hackathon2`.`user`

-- -----------------------------------------------------

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
        'Julian',
        'Ante@wcs.com',
        '',
        1,
        'Toulouse'
    ), (
        'John',
        'Doe',
        'john.doe@example.com',
        'hashed_password',
        0,
        'Factory A'
    ), (
        'Jane',
        'Smith',
        'jane.smith@example.com',
        'hashed_password',
        0,
        'Factory B'
    );

-- -----------------------------------------------------

-- Table `hackathon2`.`brand`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`brand` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `brand` VARCHAR(45) NOT NULL,
        `url_logo` VARCHAR(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Insert `hackathon2`.`brand`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`brand` (brand, url_logo)
VALUES (
        'Brand A',
        'https://example.com/logo_brand_a.png'
    ), (
        'Brand B',
        'https://example.com/logo_brand_b.png'
    );

-- -----------------------------------------------------

-- Table `hackathon2`.`model`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`model` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `model` VARCHAR(45) NOT NULL,
        `brand_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        INDEX `fk_model_brand1_idx` (`brand_id` ASC) INVISIBLE,
        CONSTRAINT `fk_model_brand` FOREIGN KEY (`brand_id`) REFERENCES `hackathon2`.`brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Insert `hackathon2`.`model`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`model` (model, brand_id)
VALUES ('Model A', 1), ('Model B', 1), ('Model C', 2);

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

-- Insert `hackathon2`.`operating_system`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`operating_system` (operating_system)
VALUES ('OS A'), ('OS B'), ('OS C');

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

-- Insert `hackathon2`.`screen`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`screen` (screen)
VALUES ('Screen A'), ('Screen B'), ('Screen C');

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

-- Insert `hackathon2`.`network`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`network` (network)
VALUES (3), (4), (5);

-- -----------------------------------------------------

-- Table `hackathon2`.`storage`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`storage` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `storage` INT NOT NULL,
        `cost_storage` INT NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Insert `hackathon2`.`storage`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`storage` (storage, cost_storage)
VALUES (64, 100), (128, 200), (256, 300);

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

-- Insert `hackathon2`.`ram`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`ram` (ram, cost_ram)
VALUES (4, 50), (8, 100), (16, 200);

-- -----------------------------------------------------

-- Table `hackathon2`.`weighting`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`weighting` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `weighting` INT NOT NULL,
        `cost_weighting` INT NOT NULL,
        `state` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Insert `hackathon2`.`weighting`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`weighting` (
        weighting,
        cost_weighting,
        state
    )
VALUES (1, 10, 'State A'), (2, 20, 'State B'), (3, 30, 'State C');

-- -----------------------------------------------------

-- Table `hackathon2`.`smartphone`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `hackathon2`.`smartphone` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `user_id` INT NOT NULL,
        `reserve` TINYINT(1) NOT NULL,
        `created_date` DATE NOT NULL,
        `has_charger` TINYINT(0) NOT NULL,
        `weighted_total` INT NOT NULL,
        `brand_id` INT NOT NULL,
        `imei` VARCHAR(45) NULL,
        `model_id` INT NOT NULL,
        `operating_system_id` INT NOT NULL,
        `screen_id` INT NOT NULL,
        `network_id` INT NOT NULL,
        `storage_id` INT NOT NULL,
        `ram_id` INT NOT NULL,
        `weighting_id` INT NOT NULL,
        `price` DECIMAL NOT NULL,
        `url_phone` VARCHAR(255) NULL,
        PRIMARY KEY (`id`, `user_id`),
        CONSTRAINT `fk_smartphone_user` FOREIGN KEY (`user_id`) REFERENCES `hackathon2`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_smartphone_brand` FOREIGN KEY (`brand_id`) REFERENCES `hackathon2`.`brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_smartphone_model` FOREIGN KEY (`model_id`) REFERENCES `hackathon2`.`model` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_smartphone_operating_system` FOREIGN KEY (`operating_system_id`) REFERENCES `hackathon2`.`operating_system` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_smartphone_screen` FOREIGN KEY (`screen_id`) REFERENCES `hackathon2`.`screen` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_smartphone_network` FOREIGN KEY (`network_id`) REFERENCES `hackathon2`.`network` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_smartphone_storage` FOREIGN KEY (`storage_id`) REFERENCES `hackathon2`.`storage` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_smartphone_ram` FOREIGN KEY (`ram_id`) REFERENCES `hackathon2`.`ram` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_smartphone_weighting` FOREIGN KEY (`weighting_id`) REFERENCES `hackathon2`.`weighting` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Insert `hackathon2`.`smartphone`

-- -----------------------------------------------------

INSERT INTO
    `hackathon2`.`smartphone` (
        user_id,
        reserve,
        created_date,
        has_charger,
        weighted_total,
        brand_id,
        imei,
        model_id,
        operating_system_id,
        screen_id,
        network_id,
        storage_id,
        ram_id,
        weighting_id,
        price,
        url_phone
    )
VALUES (
        1,
        0,
        '2023-06-28',
        1,
        100,
        1,
        '123456789012345',
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        500.00,
        'https://example.com/phone_a.png'
    ), (
        2,
        1,
        '2023-06-28',
        0,
        200,
        2,
        '987654321098765',
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        800.00,
        'https://example.com/phone_b.png'
    );