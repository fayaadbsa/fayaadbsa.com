import React from "react";
import { Tooltip as TooltipMT } from "@material-tailwind/react";

const Tooltip = ({ children, content = "" }) => {
  return (
    <TooltipMT
      className="border border-fx-aqua bg-fx-background px-3 py-2 shadow-xl shadow-black/10"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 16 },
      }}
      offset={12}
      content={<div className="text-fx-white">{content}</div>}
    >
      <div>{children}</div>
    </TooltipMT>
  );
};

export default Tooltip;
