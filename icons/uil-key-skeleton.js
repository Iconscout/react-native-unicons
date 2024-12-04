import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilKeySkeleton = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,4.41l.71-.7a1,1,0,1,0-1.42-1.42L18.89,3.7h0L16.06,6.53h0L9.75,12.83a5,5,0,1,0,1.42,1.42l5.59-5.6,2.12,2.13a1,1,0,1,0,1.41-1.42L18.17,7.24l1.42-1.41.7.7a1,1,0,1,0,1.42-1.41ZM7,20a3,3,0,1,1,3-3A3,3,0,0,1,7,20Z" />
    </Svg>
  );
};

UilKeySkeleton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilKeySkeleton;
