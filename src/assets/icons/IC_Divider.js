import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={314}
    height={1}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path stroke="#000" strokeWidth={0.5} d="M0 .75h314" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
