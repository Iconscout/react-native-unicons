import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilPanelAdd = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M18,10H14V3a1,1,0,0,0-1-1H8A1,1,0,0,0,7,3V8H3A1,1,0,0,0,2,9V21a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11A1,1,0,0,0,18,10ZM7,20H4V10H7Zm5,0H9V4h3Zm5,0H14V12h3ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilPanelAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilPanelAdd.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilPanelAdd;
