import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilVolumeUp = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM15.14,4.09a1,1,0,1,0-.28,2,6,6,0,0,1,0,11.86,1,1,0,0,0,.14,2h.14a8,8,0,0,0,0-15.82Zm-.46,9.78a1,1,0,0,0,.32,2,1.13,1.13,0,0,0,.32-.05,4,4,0,0,0,0-7.54,1,1,0,0,0-.64,1.9,2,2,0,0,1,0,3.74Z" />
    </Svg>
  );
};

UilVolumeUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilVolumeUp;
