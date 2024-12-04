import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilThSlash = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M22.71,21.29l-1-1h0l-6-6h0l-6-6h0l-6-6h0l-1-1A1,1,0,0,0,1.29,2.71l.71.7V21a1,1,0,0,0,1,1H20.59l.7.71a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,21.29ZM4,5.41,6.59,8H4ZM8,20H4V16H8Zm0-6H4V10H8Zm2-2.59L12.59,14H10ZM14,20H10V16h4Zm2,0V17.41L18.59,20ZM8.67,4H14V9a1,1,0,0,0,1,1h5v5.33a1,1,0,1,0,2,0V3a1,1,0,0,0-1-1H8.67a1,1,0,0,0,0,2ZM16,4h4V8H16Z" />
    </Svg>
  );
};

UilThSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilThSlash;
