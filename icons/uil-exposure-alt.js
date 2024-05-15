import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilExposureAlt = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11,6H7A1,1,0,0,0,7,8h4a1,1,0,0,0,0-2Zm8-4H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM4,18.59V5A1,1,0,0,1,5,4H18.59ZM20,19a1,1,0,0,1-1,1H5.41L20,5.41Zm-7-2h1v1a1,1,0,0,0,2,0V17h1a1,1,0,0,0,0-2H16V14a1,1,0,0,0-2,0v1H13a1,1,0,0,0,0,2Z" />
    </Svg>
  );
};

UilExposureAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilExposureAlt;
