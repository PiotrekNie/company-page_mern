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
          <span aria-hidden="true" key={index}>
            {char}
          </span>
        );
      })}
    </div>
  );
}
