import React from "react";
import Tag from "./Tag";

const Tags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        return <Tag tag={tag} />;
      })}
    </div>
  );
};

export default Tags;
