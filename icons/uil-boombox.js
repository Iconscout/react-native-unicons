import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilBoombox = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Zm1,17a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1Zm-3.62-8.2A3,3,0,0,0,15,9,3,3,0,0,0,9,9a3,3,0,0,0,.62,1.8,4,4,0,1,0,4.76,0ZM12,8a1,1,0,1,1-1,1A1,1,0,0,1,12,8Zm0,8a2,2,0,1,1,2-2A2,2,0,0,1,12,16Z" />
    </Svg>
  );
};

UilBoombox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilBoombox;
