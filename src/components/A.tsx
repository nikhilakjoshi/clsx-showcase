import React from "react";
import clsx from "clsx";

const Component = () => {
  const [selectedColor, setSelectedColor] = React.useState<
    "red" | "blue" | "green"
  >("red");
  const selectColor = () => {
    const colors = ["red", "blue", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)] as
      | "red"
      | "blue"
      | "green";
    setSelectedColor(randomColor ?? "red");
  };
  return (

    <React.Fragment>
      <div
        className={clsx("h-12 w-12 rounded-full", {
          "bg-red-500": selectedColor === "red",
          "bg-blue-500": selectedColor === "blue",
          "bg-green-500": selectedColor === "green",
        })}
      ></div>
      <button
        className="mt-10 rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
        onClick={selectColor}
      >
        Change color
      </button>
    </React.Fragment>
  );
};

export default Component;
