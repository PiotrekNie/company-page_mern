import React from "react";

interface SplitTextProps {
  copy: string;
  className: string;
}

export function SplitText(props: SplitTextProps) {
  return (
    <div className={props.className} aria-label={props.copy}>
      {props.copy.split("").map((char, index) => {
        return (
          <span key={index} className={char === " " ? "h-2" : ""}>
            {char}
          </span>
        );
      })}
    </div>
  );
}
