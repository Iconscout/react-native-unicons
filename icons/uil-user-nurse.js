import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilUserNurse = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M16.174 12.916c-.018-.008-.035-.017-.053-.024-.138-.062-.274-.127-.415-.183a6 6 0 1 0-7.412 0c-.14.056-.277.121-.415.183l-.054.024a9.946 9.946 0 0 0-5.76 7.976 1 1 0 1 0 1.99.216A7.945 7.945 0 0 1 8.04 15.05l3.252 3.251a1 1 0 0 0 1.414 0l3.252-3.251a7.945 7.945 0 0 1 3.987 6.058 1 1 0 0 0 .992.892 1.048 1.048 0 0 0 .11-.006 1 1 0 0 0 .886-1.102 9.946 9.946 0 0 0-5.76-7.976ZM8.041 7.594a3.977 3.977 0 0 1 7.918 0ZM12 16.18l-1.937-1.937a7.834 7.834 0 0 1 3.874 0ZM12 12a4.003 4.003 0 0 1-3.664-2.406h7.328A4.003 4.003 0 0 1 12 12Z" />
    </Svg>
  );
};

UilUserNurse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilUserNurse.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilUserNurse;
