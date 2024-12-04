import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilPlaneArrival = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.12,16.23a5,5,0,0,0-2.3-3L16.71,12l-.48-5.47a1,1,0,0,0-.49-.78l-3-1.72a1,1,0,0,0-1,0,1,1,0,0,0-.52.84l-.15,3.9-1.75-1L6.46,3.92a1,1,0,0,0-1.78.41L3.81,8.94A3,3,0,0,0,5.2,12.23l14.06,8.11A1,1,0,0,0,20.62,20,4.91,4.91,0,0,0,21.12,16.23ZM19.24,18,6.2,10.5a1,1,0,0,1-.44-1.13l.46-2.44,1.66,2.2a1,1,0,0,0,.3.27l3.35,1.94a1,1,0,0,0,1.5-.83l.16-3.9,1.09.63.48,5.47a1,1,0,0,0,.5.78L17.82,15a2.91,2.91,0,0,1,1.36,1.78A2.74,2.74,0,0,1,19.24,18Z" />
    </Svg>
  );
};

UilPlaneArrival.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilPlaneArrival;
