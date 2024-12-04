import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilUserArrows = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M20.64 15.772a3.468 3.468 0 0 0 .86-2.272 3.5 3.5 0 0 0-7 0 3.468 3.468 0 0 0 .86 2.272A4.988 4.988 0 0 0 13 20a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.988 4.988 0 0 0-2.36-4.228ZM18 15a1.5 1.5 0 1 1 1.5-1.5A1.502 1.502 0 0 1 18 15ZM6.793 7.707l2 2a1 1 0 0 0 1.414-1.414L9.914 8h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1.004 1.004 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1.004 1.004 0 0 0 0 1.414Zm1.847 8.065A3.468 3.468 0 0 0 9.5 13.5a3.5 3.5 0 0 0-7 0 3.468 3.468 0 0 0 .86 2.272A4.988 4.988 0 0 0 1 20a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.988 4.988 0 0 0-2.36-4.228ZM6 15a1.5 1.5 0 1 1 1.5-1.5A1.502 1.502 0 0 1 6 15Z" />
    </Svg>
  );
};

UilUserArrows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilUserArrows;
