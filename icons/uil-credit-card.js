import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCreditCard = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M7,15h3a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2ZM19,5H5A3,3,0,0,0,2,8v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,12a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20Zm0-8H4V8A1,1,0,0,1,5,7H19a1,1,0,0,1,1,1Z" />
    </Svg>
  );
};

UilCreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilCreditCard.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilCreditCard;
