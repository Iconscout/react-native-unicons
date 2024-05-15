import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilArrowUpRight = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z" />
    </Svg>
  );
};

UilArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilArrowUpRight;
