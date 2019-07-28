import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilChartGrowthAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,20H4V18H7a1,1,0,0,0,0-2H4V14h7a1,1,0,0,0,0-2H4V10H15a1,1,0,0,0,0-2H4V6H19a1,1,0,0,0,0-2H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilChartGrowthAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilChartGrowthAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilChartGrowthAlt;
