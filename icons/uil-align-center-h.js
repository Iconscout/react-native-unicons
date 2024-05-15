import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilAlignCenterH = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.92,11.62a1,1,0,0,0-.21-.33l-2.5-2.5a1,1,0,0,0-1.42,1.42l.8.79H16a1,1,0,0,0,0,2h2.59l-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2.5-2.5a1,1,0,0,0,.21-.33A1,1,0,0,0,21.92,11.62ZM8,11H5.41l.8-.79A1,1,0,0,0,4.79,8.79l-2.5,2.5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2.5,2.5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H8a1,1,0,0,0,0-2Zm4-4a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Z" />
    </Svg>
  );
};

UilAlignCenterH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilAlignCenterH;
