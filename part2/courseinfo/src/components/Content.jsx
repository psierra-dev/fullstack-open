import React from "react";
import Part from "./Part";

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((port) => (
        <Part key={port.id} name={port.name} exercises={port.exercises} />
      ))}
    </div>
  );
};

export default Content;
