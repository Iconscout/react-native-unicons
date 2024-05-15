import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilBrushAlt = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12,18a1,1,0,1,0,1,1A1,1,0,0,0,12,18ZM18,1H6A1,1,0,0,0,5,2v9a3,3,0,0,0,3,3H9v2.37a4,4,0,1,0,6,0V14h1a3,3,0,0,0,3-3V2A1,1,0,0,0,18,1ZM12,21a2,2,0,0,1-1.33-3.48,1,1,0,0,0,.33-.74V14h2v2.78a1,1,0,0,0,.33.74A2,2,0,0,1,12,21Zm5-10a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V10H17Zm0-3H7V3H17Z" />
    </Svg>
  );
};

UilBrushAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilBrushAlt;
