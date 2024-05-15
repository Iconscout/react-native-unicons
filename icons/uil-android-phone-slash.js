import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilAndroidPhoneSlash = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11.29,17.71a1,1,0,0,0,1.42,0,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76,1.15,1.15,0,0,0-.21-.33,1,1,0,0,0-1.42,0,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76A1.15,1.15,0,0,0,11.29,17.71ZM8.66,4H16a1,1,0,0,1,1,1v7.34a1,1,0,0,0,2,0V5a3,3,0,0,0-3-3H8.66a1,1,0,0,0,0,2ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L5,6.41V19a3,3,0,0,0,3,3h8a3,3,0,0,0,2.76-1.83l1.53,1.54a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM17,19a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8.41l10,10Z" />
    </Svg>
  );
};

UilAndroidPhoneSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilAndroidPhoneSlash;
