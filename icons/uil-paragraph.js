import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilParagraph = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M13,13.5H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilParagraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilParagraph;
