import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilHeartBreak = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M20.16,4.61A6.27,6.27,0,0,0,12,4a6.27,6.27,0,0,0-8.16,9.48l7.45,7.46a1,1,0,0,0,1.42,0l7.45-7.46A6.27,6.27,0,0,0,20.16,4.61Zm-1.41,7.45L12,18.81,5.25,12.06a4.26,4.26,0,0,1,5.54-6.45l-1.71,4a1,1,0,0,0,0,.83,1,1,0,0,0,.65.53l2.77.7L11.1,14.56a1,1,0,0,0,.46,1.34A1,1,0,0,0,12,16a1,1,0,0,0,.9-.56l2-4a1,1,0,0,0,0-.86,1.05,1.05,0,0,0-.67-.55l-2.83-.71,1.45-3.39a4.26,4.26,0,0,1,5.92,6.13Z" />
    </Svg>
  );
};

UilHeartBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilHeartBreak.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilHeartBreak;
