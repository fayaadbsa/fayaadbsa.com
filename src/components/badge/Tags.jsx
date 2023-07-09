import React from "react";

const Tags = (props) => {
  const tags = props.tags;

  return (
    <>
      {tags.map((tag) => {
        return (
          <p className="inline py-2 px-3 text-fx-aqua bg-fx-aqua-dark mr-2 mb-2 rounded cursor-pointer">
            {tag}
          </p>
        );
      })}
    </>
  );
};

export default Tags;