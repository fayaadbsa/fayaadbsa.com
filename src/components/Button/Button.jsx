import React from "react";

const Button = (props) => {
  return (
    <button className="fx-button text-fx-linear-orange-yellow rounded-lg py-4 px-8 text-xl">
      {props.children}
    </button>
  );
};

export default Button;
