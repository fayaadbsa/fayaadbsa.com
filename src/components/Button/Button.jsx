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
        <a
          href={href || "#"}
          className={`${transition === "slide" && `fx-link`} ${className}`}
          {...props}
        >
          {props.children}
        </a>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
