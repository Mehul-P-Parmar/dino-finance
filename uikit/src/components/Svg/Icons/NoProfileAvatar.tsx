import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <defs>
        <mask
          id="mask"
          x="3.33"
          y="5.33"
          width="57.33"
          height="57.33"
          maskUnits="userSpaceOnUse"
        >
          <g transform="translate(0 0)">
            <g id="A">
              <path
                d="M60.67,34A28.67,28.67,0,1,1,32,5.33,28.68,28.68,0,0,1,60.67,34Z"
                fill="#c4c4c4"
              />
            </g>
          </g>
        </mask>
      </defs>
      <circle cx="32" cy="32" r="32" fill="#cbcbd1" />
      <path
        d="M60,32A28,28,0,1,1,32,4,28,28,0,0,1,60,32Z"
        transform="translate(0 0)"
        fill="#ededef"
      />
      <g mask="url(#mask)">
        <g>
          <path
            id="C"
            d="M29.09,41.27C29.09,43.33,28,45,26.61,45s-2.49-1.67-2.49-3.73,1.12-3.73,2.49-3.73S29.09,39.21,29.09,41.27Z"
            transform="translate(0 0)"
            fill="#4444c6"
          />
          <path
            d="M39.88,41.27c0,2.06-1.12,3.73-2.49,3.73s-2.49-1.67-2.49-3.73,1.12-3.73,2.49-3.73S39.88,39.21,39.88,41.27Z"
            transform="translate(0 0)"
            fill="#4444c6"
          />
          <path
            d="M56,44.6v.34H52.66L49.5,45h-.37V44.6a10,10,0,0,0-.69-3.49,9.56,9.56,0,0,0-1.77-2.93,9.94,9.94,0,0,0-3.54-2.51,30.09,30.09,0,0,1-6.41-3.49A20.84,20.84,0,0,1,32,27.28a20.87,20.87,0,0,1-4.74,4.93,30.09,30.09,0,0,1-6.41,3.49,9.94,9.94,0,0,0-3.54,2.51,9.56,9.56,0,0,0-1.77,2.93,10,10,0,0,0-.69,3.49V45H14.5l-3.16,0H8v-.34a16.9,16.9,0,0,1,2.82-9.42,14.73,14.73,0,0,1,7.24-6,17.68,17.68,0,0,0,3.57-1.76,16.4,16.4,0,0,0,2.49-2,13.51,13.51,0,0,0,1.94-2.27L32,13l5.94,10.21a13.78,13.78,0,0,0,1.94,2.28,17,17,0,0,0,2.49,2,17.68,17.68,0,0,0,3.57,1.76,14.73,14.73,0,0,1,7.24,6A16.9,16.9,0,0,1,56,44.6Z"
            transform="translate(0 0)"
            fill="#4444c6"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;