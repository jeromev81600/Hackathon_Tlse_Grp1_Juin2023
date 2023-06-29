/* eslint-disable camelcase */
import { useMemo, useState, createContext } from "react";
import PropTypes from "prop-types";

const DetailsPhoneContext = createContext();

export default DetailsPhoneContext;

export function DetailsPhoneProvider({ children }) {
  const [id, setId] = useState(1);
  const [smartphone, setSmartphone] = useState({});

  const detailsPhoneContext = useMemo(
    () => ({
      id,
      setId,
      smartphone,
      setSmartphone,
    }),
    [id, smartphone]
  );
  return (
    <DetailsPhoneContext.Provider value={detailsPhoneContext}>
      {children}
    </DetailsPhoneContext.Provider>
  );
}

DetailsPhoneProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
