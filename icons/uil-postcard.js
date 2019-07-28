import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilPostcard = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17,11h1a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v1A1,1,0,0,0,17,11ZM6,12h5a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2ZM22,4H2A1,1,0,0,0,1,5V19a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V5A1,1,0,0,0,22,4ZM21,18H3V6H21ZM6,16h5a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Z" />
    </Svg>
  );
};

UilPostcard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilPostcard.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilPostcard;
