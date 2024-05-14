import React from "react";

export const Button = ({ styleName, buttonName, buttonRun }) => {
  return (
    <button className={styleName} onClick={buttonRun}>
      {buttonName}
    </button>
  );
};
