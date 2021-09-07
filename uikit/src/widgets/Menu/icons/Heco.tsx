import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <path d="M128,64a62.87,62.87,0,0,1-6.7,28.4h0A63.87,63.87,0,0,1,64,128h0A63.87,63.87,0,0,1,6.7,92.4h0A62.87,62.87,0,0,1,0,64,64,64,0,0,1,64,0h0A64,64,0,0,1,128,64Z" fill="#3269f7"/>
      <path d="M73.9,45.2C73.9,31,67,18.9,61.8,14.8c0,0-.3-.2-.3.3-.4,27.4-14.3,34.8-21.9,44.7-17.7,23-1.2,48.4,15.4,52.9,9.3,2.6-2.3-4.6-3.7-19.8C49.8,74.4,73.9,60.4,73.9,45.2" fill="#fff"/>
      <path d="M83.2,54.5h-.3c-.3,3.4-4.1,10.8-8.7,17.5-16,22.9-6.9,33.9-1.7,39.9,3,3.5,0,0,7.5-3.5.6-.3,14.5-7.6,16-24.4,1.1-16.4-9.2-26.6-12.8-29.5" fill="#fff"/>
    </Svg>
  );
};

export default Icon;
