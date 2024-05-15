import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilAlignCenterJustify = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,15H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM17,19H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2ZM21,7H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilAlignCenterJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilAlignCenterJustify;
