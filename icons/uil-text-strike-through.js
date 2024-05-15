import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilTextStrikeThrough = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M15,13H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V15h2a1,1,0,0,0,0-2Zm2-7H7A1,1,0,0,0,7,8h4v2a1,1,0,0,0,2,0V8h4a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilTextStrikeThrough.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilTextStrikeThrough;
