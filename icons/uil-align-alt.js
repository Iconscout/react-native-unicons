import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilAlignAlt = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M10,11H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2ZM14,5h7a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2ZM10,7H3A1,1,0,0,0,3,9h7a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2ZM10,3H7A1,1,0,0,0,7,5h3a1,1,0,0,0,0-2ZM21,7H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm-4,8H14a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm4-4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilAlignAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilAlignAlt;
