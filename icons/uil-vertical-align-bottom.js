import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilVerticalAlignBottom = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,20H18V9a1,1,0,0,0-1-1H14V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-9,0H8V4h4Zm4,0H14V10h2Z" />
    </Svg>
  );
};

UilVerticalAlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilVerticalAlignBottom;
