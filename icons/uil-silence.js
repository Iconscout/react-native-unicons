import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilSilence = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm6,0a1,1,0,1,0-1-1A1,1,0,0,0,15,11Zm1,3a1,1,0,0,0-2,0H13a1,1,0,0,0-2,0H10a1,1,0,0,0-2,0,1,1,0,0,0,0,2,1,1,0,0,0,2,0h1a1,1,0,0,0,2,0h1a1,1,0,0,0,2,0,1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    </Svg>
  );
};

UilSilence.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilSilence;
