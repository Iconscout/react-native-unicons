import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilEnvelopeDownloadAlt = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11.29,8.79a1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L13,5.67V2.92a1,1,0,0,0-2,0V5.67l-.29-.29a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41ZM16,11.08H8a3,3,0,0,0-3,3v5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3v-5A3,3,0,0,0,16,11.08Zm-.42,2L12.7,16a1,1,0,0,1-1.4,0L8.42,13.08Zm1.42,6a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V14.49l2.88,2.88a3,3,0,0,0,4.24,0L17,14.49Z" />
    </Svg>
  );
};

UilEnvelopeDownloadAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilEnvelopeDownloadAlt;
