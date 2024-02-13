import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilOkta = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 10c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
    </Svg>
  );
};

UilOkta.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilOkta.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilOkta;
