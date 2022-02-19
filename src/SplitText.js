import React from "react";

function SplitText({ copy, role }) {
  return (
    <div>
      <span aria-label={copy} role={role}>
        {copy.split(" ").map(function (char, index) {
          let style = {
            animationDelay: (0.5 + index / 10).toString() + "s",
            fontWeight: 700,
          };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}&nbsp;&nbsp;
            </span>
          );
        })}
      </span>
    </div>
  );
}

export default SplitText;
