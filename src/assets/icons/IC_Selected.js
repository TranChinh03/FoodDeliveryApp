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
    <Circle cx={7.5} cy={7.5} r={7} stroke="#FA4A0C" />
    <Circle cx={7.5} cy={7.5} r={3.5} fill="#FA4A0C" />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
