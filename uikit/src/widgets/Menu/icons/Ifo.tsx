import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" fill="none"/>
      <path d="M21.69,8.29,14.53,2.86a4.17,4.17,0,0,0-5.06,0L2.31,8.33a.78.78,0,1,0,.95,1.24L4,9V15.4a4.18,4.18,0,0,0,4.18,4.18h3v1.64a.78.78,0,0,0,1.56,0V19.58h3A4.18,4.18,0,0,0,20,15.4V9l.78.59a.78.78,0,0,0,1.09-.15.79.79,0,0,0-.15-1.1ZM18.41,15.4A2.63,2.63,0,0,1,15.79,18H8.21A2.63,2.63,0,0,1,5.59,15.4V7.79L10.42,4.1a2.63,2.63,0,0,1,3.17,0l4.82,3.66ZM12,7.86a2.54,2.54,0,1,0,2.54,2.54A2.54,2.54,0,0,0,12,7.86Zm0,3.52a1,1,0,1,1,1-1A1,1,0,0,1,12,11.38Zm1,4.1a1,1,0,0,1-2,0A1,1,0,0,1,13,15.48Z"/>
    </Svg>
  );
};

export default Icon;
