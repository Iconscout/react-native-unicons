import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilGrid = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V16h7Zm0-6H4V10h7Zm9,6H13V16h7Zm0-6H13V10h7Zm0-6H4V4H20Z" />
    </Svg>
  );
};

UilGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilGrid;
