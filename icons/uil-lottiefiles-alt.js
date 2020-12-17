import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilLottiefilesAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M19,2H5A3.00328,3.00328,0,0,0,2,5V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19,2ZM17,8c-1.65918,0-2.85645,2.17725-4.124,4.48193C11.38379,15.19482,9.84082,18,7,18a1,1,0,0,1,0-2c1.65918,0,2.85645-2.17725,4.124-4.48193C12.61621,8.80518,14.15918,6,17,6a1,1,0,0,1,0,2Z" />
    </Svg>
  );
};

UilLottiefilesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilLottiefilesAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilLottiefilesAlt;
