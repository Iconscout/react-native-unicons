import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilHeadphoneSlash = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M19.06934,5.93555a9.94468,9.94468,0,0,0-9.38868-2.6709.99992.99992,0,0,0,.43848,1.95117A8.0193,8.0193,0,0,1,20,13h-.33984a1,1,0,0,0,0,2H20v.33984a1,1,0,1,0,2,0V13A9.88842,9.88842,0,0,0,19.06934,5.93555ZM3.707,2.293A.99989.99989,0,0,0,2.293,3.707L4.72833,6.1424A9.96176,9.96176,0,0,0,2,13v7a1,1,0,0,0,1,1H6a3.00328,3.00328,0,0,0,3-3V16a3.00328,3.00328,0,0,0-3-3H4A7.96344,7.96344,0,0,1,6.14453,7.55859L15,16.41406V18a3.00328,3.00328,0,0,0,3,3h1.58594l.707.707A.99989.99989,0,0,0,21.707,20.293ZM6,15a1.0013,1.0013,0,0,1,1,1v2a1.0013,1.0013,0,0,1-1,1H4V15Z" />
    </Svg>
  );
};

UilHeadphoneSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilHeadphoneSlash;
