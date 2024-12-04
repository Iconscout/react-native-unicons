import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilProgrammingLanguage = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M22,3l-3,15.1l-9.1,3l-7.9-3L2.8,14h3.4l-0.4,1.7l4.8,1.8l5.5-1.8l0.8-3.8H3.2l0.7-3.4h13.6L18,6.4H4.3L5,3H22z" />
    </Svg>
  );
};

UilProgrammingLanguage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilProgrammingLanguage;
