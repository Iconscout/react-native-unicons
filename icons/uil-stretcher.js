import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilStretcher = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M18,4.5h3a1,1,0,0,0,0-2H18a1,1,0,0,0,0,2Zm3,2H3a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H4.55l5.11,2.56L7.08,16.35A3,3,0,0,0,5,15.5a3,3,0,1,0,3,3,2.2,2.2,0,0,0,0-.36l3.94-2L16,18.24a2.3,2.3,0,0,0,0,.26,3,3,0,1,0,3-3,3,3,0,0,0-2.15.92l-2.72-1.36,5.11-2.56H21a1,1,0,0,0,1-1v-4A1,1,0,0,0,21,6.5ZM5,19.5a1,1,0,1,1,1-1A1,1,0,0,1,5,19.5Zm14-2a1,1,0,1,1-1,1A1,1,0,0,1,19,17.5Zm-7.1-3.56L9,12.5h5.75ZM20,10.5H4v-2H20Z" />
    </Svg>
  );
};

UilStretcher.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilStretcher;
