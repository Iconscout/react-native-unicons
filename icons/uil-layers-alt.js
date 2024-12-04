import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilLayersAlt = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,2H9A1,1,0,0,0,8,3V7H6A1,1,0,0,0,5,8v4H3a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4a1,1,0,0,0,1-1V16h4a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM10,20H4V14h6Zm5-3H12V13a1,1,0,0,0-1-1H7V9h8Zm5-3H17V8a1,1,0,0,0-1-1H10V4H20Z" />
    </Svg>
  );
};

UilLayersAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilLayersAlt;
