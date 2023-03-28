import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={122}
    height={122}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M55.917 96.583c22.46 0 40.666-18.207 40.666-40.666 0-22.46-18.207-40.667-40.666-40.667-22.46 0-40.667 18.207-40.667 40.667s18.207 40.666 40.667 40.666ZM106.75 106.75 84.638 84.638"
      stroke="#C7C7C7"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo