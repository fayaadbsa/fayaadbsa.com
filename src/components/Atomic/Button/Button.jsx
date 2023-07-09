import React from "react";

const Button = (props) => {
  const { isLink = false, href, className, transition = "pop" } = props;

  return (
    <button
      className={`${
        transition === "pop" ? `fx-button` : `fx-border`
      } text-fx-linear-orange-yellow rounded-lg py-4 px-8 
        text-xl`}
    >
      {isLink ? (
        <span
          className={`${transition === "slide" && `fx-link`} ${className}`}
          {...props}
        >
          {props.children}
        </span>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
