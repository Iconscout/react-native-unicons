import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilGolfBall = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M14,9a1,1,0,1,0,1,1A1,1,0,0,0,14,9Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,14,6ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM17,8a1,1,0,1,0,1,1A1,1,0,0,0,17,8Z" />
    </Svg>
  );
};

UilGolfBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilGolfBall.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilGolfBall;
