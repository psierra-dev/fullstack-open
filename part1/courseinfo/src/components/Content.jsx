import React from "react";
import Part from "./Part";

const Content = ({listExercises}) => {
  return (
    <div>
      {listExercises.map((item) => (
        <Part part={item.part} exercises={item.exercises} />
      ))}
    </div>
  );
};

export default Content;
