import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCornerRightDown = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.71,13.35a1,1,0,0,0-1.42,0l-2.92,2.92v-8a4,4,0,0,0-4-4H3a1,1,0,1,0,0,2H13.37a2,2,0,0,1,2,2v8l-2.92-2.92A1,1,0,0,0,11,14.76l4.62,4.63a1.19,1.19,0,0,0,.33.22.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.22l4.63-4.63A1,1,0,0,0,21.71,13.35Z" />
    </Svg>
  );
};

UilCornerRightDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilCornerRightDown;
