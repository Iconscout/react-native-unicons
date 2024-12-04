import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCameraChange = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12.29,5.21l1.5,1.5a1,1,0,0,0,1.42,0,1,1,0,0,0,.13-1.21H19a1,1,0,0,0,0-2H15.34a1,1,0,0,0-.13-1.21,1,1,0,0,0-1.42,0l-1.5,1.5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76A1,1,0,0,0,12.29,5.21ZM22.92,9.12a1,1,0,0,0-.21-.33l-1.5-1.5a1,1,0,0,0-1.42,0,1,1,0,0,0-.13,1.21H16a1,1,0,0,0,0,2h3.66a1,1,0,0,0,.13,1.21,1,1,0,0,0,1.42,0l1.5-1.5a1,1,0,0,0,.21-.33A1,1,0,0,0,22.92,9.12ZM11,10a4,4,0,1,0,4,4A4,4,0,0,0,11,10Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11,16Zm9-3a1,1,0,0,0-1,1v5a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H6a1,1,0,0,0,1-.69l.54-1.62A1,1,0,0,1,8.44,7H10a1,1,0,0,0,0-2H8.44A3,3,0,0,0,5.59,7.06L5.28,8H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V14A1,1,0,0,0,20,13Z" />
    </Svg>
  );
};

UilCameraChange.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilCameraChange;
