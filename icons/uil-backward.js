import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilBackward = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M20.67,5.85a2.63,2.63,0,0,0-2.67,0L14,8.15h0a2.67,2.67,0,0,0-4-2.31L3.33,9.69a2.67,2.67,0,0,0,0,4.62L10,18.16a2.66,2.66,0,0,0,2.67,0A2.65,2.65,0,0,0,14,15.85h0l4,2.31a2.69,2.69,0,0,0,1.33.36,2.61,2.61,0,0,0,1.34-.37A2.63,2.63,0,0,0,22,15.85V8.15A2.63,2.63,0,0,0,20.67,5.85ZM12,15.85a.66.66,0,0,1-.33.58.69.69,0,0,1-.67,0L4.33,12.58a.67.67,0,0,1,0-1.16L11,7.57a.67.67,0,0,1,.67,0,.66.66,0,0,1,.33.58Zm8,0a.67.67,0,0,1-1,.57l-5-2.88V10.46l5-2.88a.67.67,0,0,1,1,.57Z" />
    </Svg>
  );
};

UilBackward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilBackward;
