import React from "react";
import Tag from "./Tag";

const Tags = ({ tags }) => {
  return (
    tags?.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          return <Tag>{tag}</Tag>;
        })}
      </div>
    )
  );
};

export default Tags;
