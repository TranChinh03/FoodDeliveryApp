import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={108}
    height={120}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M95.417 12.75H89.5V.917H77.667V12.75H30.333V.917H18.5V12.75h-5.917C6.075 12.75.75 18.075.75 24.583v82.834c0 6.508 5.325 11.833 11.833 11.833h82.834c6.508 0 11.833-5.325 11.833-11.833V24.583c0-6.508-5.325-11.833-11.833-11.833Zm0 94.667H12.583V48.25h82.834v59.167Zm-82.834-71V24.583h82.834v11.834H12.583Zm11.834 23.666h59.166v11.834H24.417V60.083Zm0 23.667h41.416v11.833H24.417V83.75Z"
      fill="#C7C7C7"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
