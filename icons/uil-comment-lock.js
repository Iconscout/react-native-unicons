import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCommentLock = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M18.92,16.13a1,1,0,0,0-1.37.37A7,7,0,0,1,11.5,20H5.91l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,10.62,6.05a1,1,0,1,0-.24-2A9,9,0,0,0,4.47,18.62L2.79,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3.5,22h8a9,9,0,0,0,7.79-4.5A1,1,0,0,0,18.92,16.13Zm.58-9.95V5a3,3,0,0,0-6,0V6.18A3,3,0,0,0,11.5,9v2a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3V9A3,3,0,0,0,19.5,6.18ZM15.5,5a1,1,0,0,1,2,0V6h-2Zm4,6a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1V9a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Z" />
    </Svg>
  );
};

UilCommentLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilCommentLock;
