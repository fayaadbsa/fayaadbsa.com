import clsx from "clsx";
import React from "react";

const Tags = (props) => {
  const tags = props.tags;

  return (
    <>
      {tags.map((tag) => {
        return (
          <p
            className={clsx(
              "inline py-2 px-3 rounded cursor-pointer",
              "text-fx-aqua bg-fx-aqua-dark text-sm"
            )}
          >
            {tag}
          </p>
        );
      })}
    </>
  );
};

export default Tags;
