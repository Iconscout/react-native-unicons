import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilVerticalAlignCenter = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,11H18V6a1,1,0,0,0-1-1H14V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3v8H3a1,1,0,0,0,0,2H6v8a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V19h3a1,1,0,0,0,1-1V13h3a1,1,0,0,0,0-2Zm-9,9H8V4h4Zm4-3H14V7h2Z" />
    </Svg>
  );
};

UilVerticalAlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilVerticalAlignCenter;
