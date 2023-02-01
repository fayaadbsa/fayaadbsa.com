import React from "react";
import { TAGS_DATA } from "../../../data/TagsData";

const Tags = (props) => {
  const tags = props.tags;

  return (
    <>
      {tags.map((tagId) => {
        return (
          <p className="inline py-2 px-3 text-fx-aqua bg-fx-aqua-dark mr-2 mb-2 rounded cursor-pointer">
            {TAGS_DATA.find((t) => t.id === tagId)?.name}
          </p>
        );
      })}
    </>
  );
};

export default Tags;
