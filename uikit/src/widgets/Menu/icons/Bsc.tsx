import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
    <circle cx="64" cy="64" r="64" fill="#f0b90b"/>
    <path d="M46.05,56.62,64,38.67l18,18L92.41,46.19,64,17.78,35.6,46.18ZM28.22,53.55,38.67,64,28.22,74.45,17.78,64ZM46.05,71.38l18,18,18-18L92.41,81.81h0L64,110.22,35.6,81.82h0ZM110.22,64,99.78,74.45,89.33,64,99.78,53.55Z" fill="#fff"/>
    <path d="M74.6,64h0L64,53.39,53.39,64h0L64,74.61,74.61,64Z" fill="#fff"/>
    </Svg>
  );
};

export default Icon;
