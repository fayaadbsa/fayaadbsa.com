import clsx from "clsx";
import React from "react";

const Tag = ({ children, rounded = false, className }) => {
  return (
    <div
      className={clsx(
        "w-fit py-1 px-3 cursor-pointer whitespace-nowrap",
        "text-fx-aqua bg-fx-aqua-dark text-sm",
        rounded ? "py-3 rounded-full" : "rounded",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
