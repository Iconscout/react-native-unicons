import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilChartBar = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,20H20V5a1,1,0,0,0-2,0V20H16V13a1,1,0,0,0-2,0v7H12V9a1,1,0,0,0-2,0V20H8V17a1,1,0,0,0-2,0v3H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilChartBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilChartBar;
