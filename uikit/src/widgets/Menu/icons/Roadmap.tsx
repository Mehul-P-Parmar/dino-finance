import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" fill="none"/>
      <path d="M12.78,11.22v.39a.78.78,0,0,1-1.56,0v-.39a.78.78,0,0,0-.78-.78H5.35a1.36,1.36,0,0,0-1,.45l-.6.65a.69.69,0,0,0,0,.94l.58.64a1.39,1.39,0,0,0,1,.44h5.1a2.34,2.34,0,0,1,2.34,2.34v5.32a.78.78,0,0,1-1.56,0V15.9a.78.78,0,0,0-.78-.78H5.34a3,3,0,0,1-2.16-.94l-.58-.64a2.27,2.27,0,0,1,0-3l.6-.65a1,1,0,0,1,.17-.18l-.17-.17L2.6,8.85a2.27,2.27,0,0,1,0-3l.6-.65a2.91,2.91,0,0,1,2.17-1H8.87a.79.79,0,0,1,0,1.57H5.35a1.36,1.36,0,0,0-1,.45l-.6.65a.69.69,0,0,0,0,.94l.58.64a1.39,1.39,0,0,0,1,.44h5.1a2.35,2.35,0,0,1,2.34,2.35ZM8.87,20.44H2.78a.78.78,0,1,0,0,1.56H8.87A.78.78,0,1,0,8.87,20.44Zm12.35,0H15.13a.78.78,0,0,0,0,1.56h6.09A.78.78,0,0,0,21.22,20.44ZM12,7.62a.78.78,0,0,1-.78-.78V2.78a.78.78,0,0,1,1.56,0V6.84A.78.78,0,0,1,12,7.62Zm8.82,1.87.58-.64a2.27,2.27,0,0,0,0-3l-.6-.65a2.91,2.91,0,0,0-2.17-1H15.13a.79.79,0,0,0,0,1.57h3.52a1.36,1.36,0,0,1,1,.45l.6.65a.69.69,0,0,1,0,.94l-.58.64a1.39,1.39,0,0,1-1,.44H15a.79.79,0,0,0,0,1.57h3.69A3,3,0,0,0,20.82,9.49Z"/>
    </Svg>
  );
};

export default Icon;
