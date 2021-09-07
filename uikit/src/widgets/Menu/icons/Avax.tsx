import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
    <circle cx="64" cy="64" r="64" fill="#e84142"/>
    <path d="M86.58,65.66c2.21-3.83,5.79-3.83,8,0L108.4,89.9c2.21,3.83.4,7-4,7H76.55c-4.39,0-6.2-3.13-4-7ZM59.87,19c2.22-3.83,5.74-3.83,8,0l3.07,5.54,7.26,12.75a13.27,13.27,0,0,1,0,11.54L53.82,91a12.83,12.83,0,0,1-10,5.85H23.63c-4.43,0-6.24-3.08-4-7Z" fill="#fff"/>
    </Svg>
  );
};

export default Icon;
