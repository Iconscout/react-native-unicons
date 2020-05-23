import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilBing = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M10.1,8.6l1.7,4.3l2.8,1.3L9,17.5V3.4L5,2v17.8L9,22l10-5.8v-4.5L10.1,8.6z" />
    </Svg>
  );
};

UilBing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilBing.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilBing;
