import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilStopCircle = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M15,8H9A1,1,0,0,0,8,9v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V9A1,1,0,0,0,15,8Zm-1,6H10V10h4ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    </Svg>
  );
};

UilStopCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilStopCircle.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilStopCircle;
