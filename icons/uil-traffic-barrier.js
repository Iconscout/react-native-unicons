import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilTrafficBarrier = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,5H20V4a1,1,0,0,0-2,0V5H6V4A1,1,0,0,0,4,4V5H3A1,1,0,0,0,2,6v6a1,1,0,0,0,1,1H4v7a1,1,0,0,0,2,0V13H18v7a1,1,0,0,0,2,0V13h1a1,1,0,0,0,1-1V6A1,1,0,0,0,21,5ZM4,9.52V7H6.52ZM5.34,11l4-4h3.33l-4,4Zm6.15,0,4-4h3.18l-4,4ZM20,11H17.49L20,8.49Z" />
    </Svg>
  );
};

UilTrafficBarrier.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilTrafficBarrier;
