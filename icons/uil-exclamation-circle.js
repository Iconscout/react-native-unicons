import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilExclamationCircle = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12,14a1,1,0,1,0,1,1A1,1,0,0,0,12,14ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM12,8a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z" />
    </Svg>
  );
};

UilExclamationCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilExclamationCircle.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilExclamationCircle;
