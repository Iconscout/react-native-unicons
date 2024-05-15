import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilAngleDoubleDown = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11.29,11.46a1,1,0,0,0,1.42,0l3-3A1,1,0,1,0,14.29,7L12,9.34,9.71,7A1,1,0,1,0,8.29,8.46Zm3,1.08L12,14.84l-2.29-2.3A1,1,0,0,0,8.29,14l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" />
    </Svg>
  );
};

UilAngleDoubleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilAngleDoubleDown;
