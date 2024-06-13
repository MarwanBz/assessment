import * as React from "react";

import Svg, { Defs, Ellipse, G, Path } from "react-native-svg";

/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BacGround(props) {
  return (
    <Svg
      width={393}
      height={852}
      viewBox="0 0 393 852"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#EFEBEA" d="M-58 -14H500V852H-58z" />
      <G filter="url(#filter0_f_56_18)">
        <Ellipse cx={148} cy={194} rx={114} ry={113} fill="#FE8833" />
      </G>
      <G filter="url(#filter1_f_56_18)">
        <Ellipse cx={430} cy={593} rx={114} ry={113} fill="#FE8833" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default BacGround;
