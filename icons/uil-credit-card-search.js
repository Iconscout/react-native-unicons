import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCreditCardSearch = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M20 17.57a4.3 4.3 0 1 0-3.67 2.06 4.37 4.37 0 0 0 2.24-.63l1.72 1.73a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM18 17a2.37 2.37 0 0 1-3.27 0 2.32 2.32 0 0 1 0-3.27 2.31 2.31 0 0 1 3.27 0A2.32 2.32 0 0 1 18 17Zm1-14H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h4a1 1 0 0 0 0-2H5a1 1 0 0 1-1-1V9h16v1a1 1 0 0 0 2 0V6a3 3 0 0 0-3-3Zm1 4H4V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-10 4H7a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Z" />
    </Svg>
  );
};

UilCreditCardSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilCreditCardSearch.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilCreditCardSearch;
