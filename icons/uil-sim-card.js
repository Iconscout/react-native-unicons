import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilSimCard = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17,3.5H7A3.5,3.5,0,0,0,3.5,7V17A3.5,3.5,0,0,0,7,20.5H17A3.5,3.5,0,0,0,20.5,17V7A3.5,3.5,0,0,0,17,3.5Zm-6.5,2h3v3h-3Zm-2,13H7A1.5,1.5,0,0,1,5.5,17V15.5h3Zm5,0h-3v-3h3Zm5-1.5A1.5,1.5,0,0,1,17,18.5H15.5v-3h3Zm0-3.5H5.5V7A1.5,1.5,0,0,1,7,5.5H8.5v4a1,1,0,0,0,1,1h9Zm0-5h-3v-3H17A1.5,1.5,0,0,1,18.5,7Z" />
    </Svg>
  );
};

UilSimCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilSimCard;
