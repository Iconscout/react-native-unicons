import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilSurprise = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM10,9a1,1,0,1,0-1,1A1,1,0,0,0,10,9Zm5-1a1,1,0,1,0,1,1A1,1,0,0,0,15,8Zm-3,3a3.39,3.39,0,0,0-3.25,3.5A3.39,3.39,0,0,0,12,18a3.39,3.39,0,0,0,3.25-3.5A3.39,3.39,0,0,0,12,11Zm0,5a1.39,1.39,0,0,1-1.25-1.5A1.39,1.39,0,0,1,12,13a1.39,1.39,0,0,1,1.25,1.5A1.39,1.39,0,0,1,12,16Z" />
    </Svg>
  );
};

UilSurprise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilSurprise;
