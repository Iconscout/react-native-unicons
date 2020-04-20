import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilTachometerFastAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12,5A10,10,0,0,0,3.34,20a1,1,0,0,0,1.74-1A7.92,7.92,0,0,1,4,15a8,8,0,1,1,14.93,4,1,1,0,0,0,.37,1.37A1,1,0,0,0,20.66,20,10,10,0,0,0,12,5Zm2.84,5.76L13.29,12.3A2.91,2.91,0,0,0,12,12a3,3,0,1,0,3,3,2.9,2.9,0,0,0-.3-1.28l1.55-1.54a1,1,0,0,0,0-1.42A1,1,0,0,0,14.84,10.76ZM12,16a1,1,0,0,1,0-2,1,1,0,0,1,.7.28v0h0A1,1,0,0,1,13,15,1,1,0,0,1,12,16Z" />
    </Svg>
  );
};

UilTachometerFastAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilTachometerFastAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilTachometerFastAlt;
