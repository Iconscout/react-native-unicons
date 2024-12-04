import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilListUiAlt = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M3.5,6a1,1,0,1,0,1,1A1,1,0,0,0,3.5,6Zm4,2h14a1,1,0,0,0,0-2H7.5a1,1,0,0,0,0,2Zm0,3a1,1,0,1,0,1,1A1,1,0,0,0,7.5,11Zm4,5a1,1,0,1,0,1,1A1,1,0,0,0,11.5,16Zm10-5h-10a1,1,0,0,0,0,2h10a1,1,0,0,0,0-2Zm0,5h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilListUiAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilListUiAlt;
