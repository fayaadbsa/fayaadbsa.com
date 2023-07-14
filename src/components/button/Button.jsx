import clsx from "clsx";
import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={clsx(
        "flex rounded-lg p-0.5",
        "bg-gradient-to-r from-fx-orange to-fx-yellow",
        // "hover:from-fx-yellow hover:to-fx-aqua",
        "hover:-translate-y-1 hover:shadow-fx-yellow",
        "transition-all duration-200",
        className
      )}
    >
      <span className="bg-fx-background py-4 px-8 rounded-md">
        <span
          className={clsx(
            "text-fx-linear-orange-yellow text-xl font-medium"
            // "hover:from-fx-yellow hover:to-fx-aqua",
            // "transition-all"
          )}
        >
          {children}
        </span>
      </span>
    </button>
  );
};

export default Button;
