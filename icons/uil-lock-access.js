import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilLockAccess = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,2H15a1,1,0,0,0,0,2h5V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2Zm0,12a1,1,0,0,0-1,1v5H15a1,1,0,0,0,0,2h6a1,1,0,0,0,1-1V15A1,1,0,0,0,21,14ZM12,6A3,3,0,0,0,9,9v1a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2V9A3,3,0,0,0,12,6ZM11,9a1,1,0,0,1,2,0v1H11Zm4,7H9V12h6ZM3,10A1,1,0,0,0,4,9V4H9A1,1,0,0,0,9,2H3A1,1,0,0,0,2,3V9A1,1,0,0,0,3,10ZM9,20H4V15a1,1,0,0,0-2,0v6a1,1,0,0,0,1,1H9a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilLockAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilLockAccess;
