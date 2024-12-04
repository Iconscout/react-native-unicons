import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilTopArrowFromTop = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2ZM8.71,7.71,11,5.41V17a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71Z" />
    </Svg>
  );
};

UilTopArrowFromTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilTopArrowFromTop;
