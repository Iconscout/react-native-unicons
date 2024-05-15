import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilAlignRightJustify = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM21,19H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-8H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilAlignRightJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilAlignRightJustify;
