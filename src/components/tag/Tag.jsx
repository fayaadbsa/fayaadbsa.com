import clsx from "clsx";
import React from "react";

const Tag = ({ tag }) => {
  return (
    <div
      className={clsx(
        "inline py-1 px-3 rounded cursor-pointer whitespace-nowrap",
        "text-fx-aqua bg-fx-aqua-dark text-sm"
      )}
    >
      {tag}
    </div>
  );
};

export default Tag;
