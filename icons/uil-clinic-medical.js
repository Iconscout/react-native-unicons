import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilClinicMedical = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11 12v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1a1 1 0 0 0-2 0Zm10.664-1.748-9-8a.999.999 0 0 0-1.328 0l-9 8a1 1 0 0 0 1.328 1.496L4 11.449V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.551l.336.299a1 1 0 0 0 1.328-1.496ZM18 20H6V9.671l6-5.333 6 5.333Z" />
    </Svg>
  );
};

UilClinicMedical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilClinicMedical.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilClinicMedical;
