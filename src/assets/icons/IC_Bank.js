import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={40} height={40} rx={10} fill="#C4C4C4" />
    <Rect width={40} height={40} rx={10} fill="#EB4796" />
    <Path
      d="m20 11-7 4v1h14v-1l-7-4Zm-5 6-.2 7h2.5l-.3-7h-2Zm4 0-.2 7h2.5l-.3-7h-2Zm4 0-.2 7h2.5l-.3-7h-2ZM13 27h14v-2H13v2Z"
      fill="#fff"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
