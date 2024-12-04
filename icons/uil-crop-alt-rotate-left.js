import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCropAltRotateLeft = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M9.71,16.29a1,1,0,0,0-1.42,1.42l.3.29H8a3,3,0,0,1-3-3V13a1,1,0,0,0-2,0v2a5,5,0,0,0,5,5h.59l-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,0-1.42ZM20,12H19V5a1,1,0,0,0-1-1H11V3A1,1,0,0,0,9,3V4H8A1,1,0,0,0,8,6H9v7a1,1,0,0,0,1,1h7v1a1,1,0,0,0,2,0V14h1a1,1,0,0,0,0-2Zm-3,0H11V6h6Z" />
    </Svg>
  );
};

UilCropAltRotateLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilCropAltRotateLeft;
