import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilVideoQuestion = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M10.21,17.29a1.04667,1.04667,0,0,0-1.41992,0,1.02673,1.02673,0,0,0-.21.32959.94223.94223,0,0,0,0,.76025,1.15384,1.15384,0,0,0,.21.33008A1,1,0,0,0,10.5,18a.99993.99993,0,0,0-.08008-.38037A1.1515,1.1515,0,0,0,10.21,17.29ZM9.5,9a3.00933,3.00933,0,0,0-2.59766,1.49951.99956.99956,0,1,0,1.73047,1.001A1.00032,1.00032,0,1,1,9.5,13a.99974.99974,0,0,0-1,1v1a1,1,0,0,0,2,0v-.18427A2.99257,2.99257,0,0,0,9.5,9ZM21.52539,6.14941a.999.999,0,0,0-.97266-.04394l-3.56408,1.782A2.9975,2.9975,0,0,0,14,5H5A3.00328,3.00328,0,0,0,2,8v6a3.00328,3.00328,0,0,0,3,3H6a1,1,0,0,0,0-2H5a1.001,1.001,0,0,1-1-1V8A1.001,1.001,0,0,1,5,7h9a1.001,1.001,0,0,1,1,1v6a1.001,1.001,0,0,1-1,1h-.5a1,1,0,0,0,0,2H14a2.9975,2.9975,0,0,0,2.98865-2.88751l3.56408,1.782A1.00038,1.00038,0,0,0,22,15V7A.99976.99976,0,0,0,21.52539,6.14941ZM20,13.38184l-3-1.5V10.11816l3-1.5Z" />
    </Svg>
  );
};

UilVideoQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilVideoQuestion.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilVideoQuestion;
