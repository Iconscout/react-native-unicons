import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilHorizontalAlignRight = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,2a1,1,0,0,0-1,1V6H9A1,1,0,0,0,8,7v3H3a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H20v3a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2ZM20,16H4V12H20Zm0-6H10V8H20Z" />
    </Svg>
  );
};

UilHorizontalAlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilHorizontalAlignRight;
