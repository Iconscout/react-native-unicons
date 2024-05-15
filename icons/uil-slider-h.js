import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilSliderH = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,11H17.81573a2.98208,2.98208,0,0,0-5.63146,0H3a1,1,0,0,0,0,2h9.18433a2.982,2.982,0,0,0,5.6314,0H21a1,1,0,0,0,0-2Zm-6,2a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,15,13Z" />
    </Svg>
  );
};

UilSliderH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilSliderH;
