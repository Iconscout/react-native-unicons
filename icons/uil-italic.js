import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilItalic = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17,6H11a1,1,0,0,0,0,2h1.52l-3.2,8H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H11.48l3.2-8H17a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilItalic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilItalic;
