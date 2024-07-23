import {useEffect, useState} from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import services from "./services";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");

  const [filter, setFilter] = useState("");

  const [messageSuccess, setMessageSuccess] = useState("");
  const [messageError, setMessageError] = useState("");

  const personsFiltered =
    filter && persons.length
      ? persons.filter((person) =>
          person.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())
        )
      : persons;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const resp = await services.getAll();
      setPersons(resp);
    } catch (error) {
      console.log(error);
    }
  }
  const handleChangeInputName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeInputPhone = (e) => {
    setPhone(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const indexUser = persons.findIndex((person) => {
      return person.name === newName || person.number === newPhone;
    });

    if (indexUser !== -1) {
      //alert(`${newName} or ${newPhone} is already added to phonebook`);
      const person = persons[indexUser];
      const confirm = window.confirm(
        `${person.name} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirm) {
        const newPerson = {
          ...person,
          number: newPhone,
        };

        try {
          await services.update(person.id, newPerson);
          setNewName(" ");
          setPhone(" ");
          getData();
        } catch (error) {
          setMessageError(
            `Information of ${newName} has already been removed from server`
          );
          setTimeout(() => {
            setMessageError("");
          }, [2000]);
        }
      }

      return;
    }

    const id = String(Number.parseInt(persons[persons.length - 1].id) + 1);
    const newPerson = {
      id,
      name: newName,
      number: newPhone,
    };

    setNewName(" ");
    setPhone(" ");
    try {
      await services.create(newPerson);
      getData();
      setMessageSuccess(`Added ${newName}`);
      setTimeout(() => {
        setMessageSuccess("");
      }, [2000]);
    } catch (error) {}
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDeletePerson = async (id) => {
    try {
      await services.deletePerson(id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      {messageSuccess && (
        <Notification message={messageSuccess} type="success" />
      )}
      {messageError && <Notification message={messageError} type="error" />}
      <Filter onChange={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmitForm={onSubmitForm}
        handleChangeInputName={handleChangeInputName}
        handleChangeInputPhone={handleChangeInputPhone}
        valueName={newName}
        valuePhone={newPhone}
      />
      <h3>Numbers</h3>
      <Persons persons={personsFiltered} onDelete={handleDeletePerson} />
    </div>
  );
}

export default App;
