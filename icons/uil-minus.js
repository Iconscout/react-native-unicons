import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilMinus = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilMinus;
