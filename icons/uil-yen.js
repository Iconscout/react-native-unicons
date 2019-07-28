import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilYen = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M18.55,2.17a1,1,0,0,0-1.38.28L12,10.2,6.83,2.45a1,1,0,0,0-1.66,1.1l5,7.45H7a1,1,0,0,0,0,2h4v2H7a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V17h4a1,1,0,0,0,0-2H13V13h4a1,1,0,0,0,0-2H13.87l5-7.45A1,1,0,0,0,18.55,2.17Z" />
    </Svg>
  );
};

UilYen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilYen.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilYen;
