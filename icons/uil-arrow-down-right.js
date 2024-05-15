import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilArrowDownRight = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17,6a1,1,0,0,0-1,1v7.59L7.71,6.29A1,1,0,0,0,6.29,7.71L14.59,16H7a1,1,0,0,0,0,2H17a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,18,17V7A1,1,0,0,0,17,6Z" />
    </Svg>
  );
};

UilArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilArrowDownRight;
