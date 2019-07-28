import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilAlignLetterRight = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M10,4H21a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM21,6H3A1,1,0,0,0,3,8H21a1,1,0,0,0,0-2Zm0,10H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-6H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilAlignLetterRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilAlignLetterRight.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilAlignLetterRight;
