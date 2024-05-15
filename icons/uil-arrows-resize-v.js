import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilArrowsResizeV = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M16,11H13V5.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8V11H8a1,1,0,0,0,0,2h3v5.59l-.79-.8a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,0,0-1.42-1.42l-.79.8V13h3a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilArrowsResizeV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilArrowsResizeV;
