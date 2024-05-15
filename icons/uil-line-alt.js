import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilLineAlt = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z" />
    </Svg>
  );
};

UilLineAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilLineAlt;
