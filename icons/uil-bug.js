import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilBug = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M19,14h2a1,1,0,0,0,0-2H19V11a5.15,5.15,0,0,0-.21-1.36A5,5,0,0,0,22,5a1,1,0,0,0-2,0,3,3,0,0,1-2.14,2.87A5,5,0,0,0,16,6.4,2.58,2.58,0,0,0,16,6,4,4,0,0,0,8,6a2.58,2.58,0,0,0,0,.4,5,5,0,0,0-1.9,1.47A3,3,0,0,1,4,5,1,1,0,0,0,2,5,5,5,0,0,0,5.21,9.64,5.15,5.15,0,0,0,5,11v1H3a1,1,0,0,0,0,2H5v1a7,7,0,0,0,.14,1.38A5,5,0,0,0,2,21a1,1,0,0,0,2,0,3,3,0,0,1,1.81-2.74,7,7,0,0,0,12.38,0A3,3,0,0,1,20,21a1,1,0,0,0,2,0,5,5,0,0,0-3.14-4.62A7,7,0,0,0,19,15Zm-8,5.9A5,5,0,0,1,7,15V11a3,3,0,0,1,3-3h1ZM10,6a2,2,0,0,1,4,0Zm7,9a5,5,0,0,1-4,4.9V8h1a3,3,0,0,1,3,3Z" />
    </Svg>
  );
};

UilBug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilBug;
