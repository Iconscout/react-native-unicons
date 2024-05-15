import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilHospitalSymbol = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M15 7a1 1 0 0 0-1 1v3h-4V8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0v-3h4v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm-3-5a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Z" />
    </Svg>
  );
};

UilHospitalSymbol.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilHospitalSymbol;
