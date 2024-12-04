import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilPricetagAlt = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M7,6A1,1,0,1,0,8,7,1,1,0,0,0,7,6Zm14.71,5.78L12.23,2.32A1,1,0,0,0,11.5,2h-6a1,1,0,0,0-.71.29L2.29,4.78A1,1,0,0,0,2,5.49v6a1.05,1.05,0,0,0,.29.71l9.49,9.5a1.05,1.05,0,0,0,.71.29,1,1,0,0,0,.71-.29l8.51-8.51a1,1,0,0,0,.29-.71A1.05,1.05,0,0,0,21.71,11.78Zm-9.22,7.81L4,11.09V5.9L5.9,4h5.18l8.5,8.49Z" />
    </Svg>
  );
};

UilPricetagAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilPricetagAlt;
