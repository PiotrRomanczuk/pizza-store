"use client";

import { useEffect } from "react";
import Vara from "vara";

export const VaraHandwriting = ({
  text,
  fontSize,
  divID,
}: {
  text: string;
  fontSize: number;
  divID: string;
}) => {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: fontSize,
          strokeWidth: 1.8,
          textAlign: "center",
        },
      ],
    );
  }, []);

  return <div id="divId" className="z-[20]"></div>;
};
