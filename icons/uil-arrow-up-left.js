import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilArrowUpLeft = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M9.41,8H17a1,1,0,0,0,0-2H7a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,6,7V17a1,1,0,0,0,2,0V9.41l8.29,8.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
    </Svg>
  );
};

UilArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilArrowUpLeft.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilArrowUpLeft;
