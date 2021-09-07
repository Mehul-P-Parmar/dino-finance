import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1ZM10.56,11.46a2,2,0,1,1,2-2A2,2,0,0,1,10.56,11.46Zm1.57,2.13,0,0a3.55,3.55,0,0,0,1.84.51,8.52,8.52,0,0,0,1.94-.16,10.47,10.47,0,0,0,1.88-.58,9.23,9.23,0,0,0,.9-.42l.3-.18.46-.31.07-.05.08,0-.06.08a7.47,7.47,0,0,1-1.69,1.08,10.28,10.28,0,0,1-1.88.68,6,6,0,0,1-2,.24,3,3,0,0,1-.83-.18A2.22,2.22,0,0,1,12.13,13.59Zm5-2.13A.43.43,0,0,1,17.6,11a.44.44,0,0,1,.43.43.42.42,0,0,1-.43.42A.42.42,0,0,1,17.17,11.46ZM13.8,22c-.42-3,2.18-5.89,3.64-7.38.33-.33.83-.79,1.29-1.27l.1-.1c1.85-1.76,2.18-3.85-1.67-4.9-.74-.21-1.5-.52-2.28-.82a1.33,1.33,0,0,0-.11-.24.15.15,0,0,0-.06-.09A2.26,2.26,0,0,0,12,6.57a5.76,5.76,0,0,0-2.67-.08c-3.7,1-4.35,2.81-4.51,5v.06a17.8,17.8,0,0,1-1.23,6.26A10.17,10.17,0,1,1,13.8,22Z"
        transform="translate(-1 -1)"
      />
      <path
        d="M11.94,9.51a1.39,1.39,0,1,1-1.38-1.38A1.38,1.38,0,0,1,11.94,9.51Z"
        transform="translate(-1 -1)"
      />
    </Svg>
  );
};

export default Icon;
