import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilSmileWink = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M14.36,14.23a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54ZM10.5,10A1.5,1.5,0,1,0,9,11.5,1.5,1.5,0,0,0,10.5,10ZM15,9H14a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    </Svg>
  );
};

UilSmileWink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilSmileWink;
