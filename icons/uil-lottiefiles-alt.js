import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilLottiefilesAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-2 6c-1.66 0-2.856 2.177-4.124 4.482C11.384 15.195 9.841 18 7 18a1 1 0 0 1 0-2c1.66 0 2.856-2.177 4.124-4.482C12.616 8.805 14.159 6 17 6a1 1 0 0 1 0 2Z" />
    </Svg>
  );
};

UilLottiefilesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilLottiefilesAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilLottiefilesAlt;
