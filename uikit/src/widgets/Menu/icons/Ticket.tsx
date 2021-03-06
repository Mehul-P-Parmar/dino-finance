import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" fill="none"/>
      <path d="M9.07,17H5.91a.78.78,0,0,1,0-1.56H9.07A.78.78,0,1,1,9.07,17Zm3.28-3.9a.78.78,0,0,0-.78-.78H5.91a.78.78,0,0,0,0,1.56h5.66A.78.78,0,0,0,12.35,13.1Zm5,8.9a1.88,1.88,0,0,1-1.71-1.11.79.79,0,0,0-1.42,0A1.88,1.88,0,0,1,12.47,22H6.69A4.7,4.7,0,0,1,2,17.31V12A4.69,4.69,0,0,1,6.69,7.32h5.78a1.89,1.89,0,0,1,1.71,1.1.78.78,0,0,0,1.42,0,1.89,1.89,0,0,1,1.71-1.1A4.69,4.69,0,0,1,22,12v5.31A4.7,4.7,0,0,1,17.31,22Zm-2.42-3.12A2.34,2.34,0,0,1,17,20.25a.33.33,0,0,0,.29.19,3.13,3.13,0,0,0,3.12-3.13V12a3.12,3.12,0,0,0-3.12-3.12.33.33,0,0,0-.29.19,2.34,2.34,0,0,1-4.26,0,.34.34,0,0,0-.29-.19H6.69A3.12,3.12,0,0,0,3.57,12v5.31a3.13,3.13,0,0,0,3.12,3.13h5.78a.34.34,0,0,0,.29-.19A2.34,2.34,0,0,1,14.89,18.88ZM20.8,6.69A.78.78,0,0,1,20,6.07a3.13,3.13,0,0,0-1.34-2,3.1,3.1,0,0,0-2.35-.45.3.3,0,0,0-.24.25,2.37,2.37,0,0,1-1.82,1.77,2.42,2.42,0,0,1-.47,0,2.36,2.36,0,0,1-1.89-1,.3.3,0,0,0-.32-.13L4,6.21a.79.79,0,0,1-.93-.6.8.8,0,0,1,.61-.93l7.57-1.59a1.89,1.89,0,0,1,1.9.73.78.78,0,0,0,1.39-.28c.53-2.13,3.57-1.72,5-.75a4.64,4.64,0,0,1,2,3,.79.79,0,0,1-.61.93Zm-4.93,9.77a1,1,0,1,1-1-1A1,1,0,0,1,15.87,16.46Zm-1-4.53a1,1,0,1,0,1,1A1,1,0,0,0,14.89,11.93Z"/>
    </Svg>
  );
};

export default Icon;
