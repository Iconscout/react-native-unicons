import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilGripHorizontalLine = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M3,11H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilGripHorizontalLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilGripHorizontalLine;
