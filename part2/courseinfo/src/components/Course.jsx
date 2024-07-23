import React from "react";
import Content from "./Content";
import Header from "./Header";

const Course = ({course}) => {
  const total = course.parts
    .map((part) => part.exercises)
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />

      <h4>total of {total} exercises</h4>
    </div>
  );
};

export default Course;
