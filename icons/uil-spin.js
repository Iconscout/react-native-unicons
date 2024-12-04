import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilSpin = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M13,3a7,7,0,0,0,0,14A5,5,0,0,0,13,7a3,3,0,0,0,0,6,1,1,0,0,0,0-2,1,1,0,0,1,0-2,3,3,0,0,1,0,6A5,5,0,0,1,13,5a7,7,0,0,1,0,14,9,9,0,0,1-9-9,1,1,0,0,0-2,0A11,11,0,0,0,13,21,9,9,0,0,0,13,3Z" />
    </Svg>
  );
};

UilSpin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilSpin;
