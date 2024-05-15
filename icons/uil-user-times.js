import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilUserTimes = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M13.3,12.22A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Zm10.91.5.8-.79a1,1,0,0,0-1.42-1.42l-.79.8-.79-.8a1,1,0,0,0-1.42,1.42l.8.79-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.79-.8.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
    </Svg>
  );
};

UilUserTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilUserTimes;
