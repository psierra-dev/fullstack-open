import React from "react";
import services from "../services";

const Persons = ({persons, onDelete}) => {
  const handleDelete = async (person) => {
    const confirm = window.confirm(`Delete ${person.name} ?`);

    if (confirm) {
      onDelete(person.id);
    }
  };

  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
