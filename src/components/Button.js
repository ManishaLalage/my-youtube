import React from "react";

const Button = ({ id,title }) => {
  return (
    <div>
      <button key={id}  className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{title}</button>
    </div>
  );
};

export default Button;
