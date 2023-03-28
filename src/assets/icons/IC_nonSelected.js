import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={7.5} cy={7.5} r={7} stroke="#9F9F9F" />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
