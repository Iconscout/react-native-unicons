import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilPanoramaH = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.54,5.16a1,1,0,0,0-1-.07A21.27,21.27,0,0,1,12,6.73,21.27,21.27,0,0,1,3.42,5.09a1,1,0,0,0-1,.07A1,1,0,0,0,2,6V18a1,1,0,0,0,.46.84,1,1,0,0,0,1,.07A21.27,21.27,0,0,1,12,17.27a21.27,21.27,0,0,1,8.58,1.64A1.06,1.06,0,0,0,21,19a1,1,0,0,0,.54-.16A1,1,0,0,0,22,18V6A1,1,0,0,0,21.54,5.16ZM20,16.52a24.77,24.77,0,0,0-8-1.25,24.77,24.77,0,0,0-8,1.25v-9a24.77,24.77,0,0,0,8,1.25,24.77,24.77,0,0,0,8-1.25Z" />
    </Svg>
  );
};

UilPanoramaH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilPanoramaH;
