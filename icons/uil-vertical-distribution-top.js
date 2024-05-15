import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilVerticalDistributionTop = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M3,6H4v5a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V6h1a1,1,0,0,0,0-2H3A1,1,0,0,0,3,6ZM6,6H18v4H6Zm15,8H3a1,1,0,0,0,0,2H5v3a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V16h2a1,1,0,0,0,0-2Zm-4,4H7V16H17Z" />
    </Svg>
  );
};

UilVerticalDistributionTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilVerticalDistributionTop;
