import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilKeyholeSquareFull = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11,11.72V15a1,1,0,0,0,2,0V11.72A2,2,0,0,0,14,10a2,2,0,0,0-4,0A2,2,0,0,0,11,11.72ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z" />
    </Svg>
  );
};

UilKeyholeSquareFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilKeyholeSquareFull;
