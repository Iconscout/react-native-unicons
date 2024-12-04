import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilLeftIndent = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7Zm0,4H13a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2ZM21.77,9.69a1,1,0,0,0-1.41-.12l-2,1.66a1,1,0,0,0,0,1.54l2,1.66a1,1,0,0,0,.64.24,1,1,0,0,0,.77-.36,1,1,0,0,0-.13-1.41L20.56,12l1.08-.9A1,1,0,0,0,21.77,9.69ZM21,17H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3,15H13a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z" />
    </Svg>
  );
};

UilLeftIndent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilLeftIndent;
