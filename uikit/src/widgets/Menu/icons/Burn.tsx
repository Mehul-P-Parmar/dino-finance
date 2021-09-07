import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M19.56,13.85v0l0-.2a11.72,11.72,0,0,0-2.8-6.45c-1.06-1.42-2-2.65-2-4.41a.77.77,0,0,0-1.21-.62A10.63,10.63,0,0,0,9.65,7.8a16.75,16.75,0,0,0-.42,3.64,3.88,3.88,0,0,1-1.3-2.36.79.79,0,0,0-.4-.57.74.74,0,0,0-.68,0c-.1,0-2.32,1.15-2.43,5.47,0,.14,0,.29,0,.43a7.59,7.59,0,0,0,15.18,0C19.59,14.21,19.57,14,19.56,13.85ZM12,20.48A2.15,2.15,0,0,1,10,18.26v-.13a3.28,3.28,0,0,1,0-.46,1.62,1.62,0,0,0,1.18.49.76.76,0,0,0,.76-.76,8.46,8.46,0,0,1,.14-1.74,3.41,3.41,0,0,1,.38-.89,6.81,6.81,0,0,0,.62,1,4.29,4.29,0,0,1,1,2.34c0,.05,0,.11,0,.18A2.15,2.15,0,0,1,12,20.48Zm3.39-1a4.2,4.2,0,0,0,.18-1.17c0-.1,0-.19,0-.38a5.63,5.63,0,0,0-1.23-3,2.8,2.8,0,0,1-.73-1.67.77.77,0,0,0-.43-.69.8.8,0,0,0-.8.08,5.14,5.14,0,0,0-1.77,2.7l0,.16a1.07,1.07,0,0,0-.19-.13.77.77,0,0,0-.71,0c-.19.11-1.18.7-1.23,2.74a1.48,1.48,0,0,0,0,.21,4.2,4.2,0,0,0,.18,1.17,6.08,6.08,0,0,1-2.67-5c0-.11,0-.23,0-.36a6.56,6.56,0,0,1,.86-3.4A3.54,3.54,0,0,0,10,13.17a.77.77,0,0,0,.76-.77,17.5,17.5,0,0,1,.38-4.22,8.85,8.85,0,0,1,2.29-3.91,10.53,10.53,0,0,0,2.09,3.81A10.17,10.17,0,0,1,18,13.73l0,.19c0,.17,0,.32,0,.49A6.08,6.08,0,0,1,15.39,19.44Z"/>
      <rect width="24" height="24" fill="none"/>
    </Svg>
  );
};

export default Icon;
