import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (

  <Svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.367 2.842a4.583 4.583 0 0 0-6.484 0L10 3.725l-.883-.883a4.584 4.584 0 0 0-6.484 6.483l.884.883L10 16.692l6.483-6.484.884-.883a4.581 4.581 0 0 0 0-6.483v0Z"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
