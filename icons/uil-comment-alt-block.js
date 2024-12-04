import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCommentAltBlock = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M19,6H15a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H9a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3h8.36l3,2.73A1,1,0,0,0,21,22a1.1,1.1,0,0,0,.4-.08A1,1,0,0,0,22,21V9A3,3,0,0,0,19,6Zm-8.46,4.54A5,5,0,1,0,7,12,5,5,0,0,0,10.54,10.54ZM4,7A3,3,0,0,1,7,4a3,3,0,0,1,1.28.3l-4,4A3,3,0,0,1,4,7ZM9.7,5.71A3,3,0,0,1,10,7,3,3,0,0,1,5.72,9.7Z" />
    </Svg>
  );
};

UilCommentAltBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilCommentAltBlock;
