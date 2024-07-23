import React from "react";

const PersonForm = ({
  onSubmitForm,
  handleChangeInputName,
  handleChangeInputPhone,
  valueName,
  valuePhone,
}) => {
  return (
    <form onSubmit={onSubmitForm}>
      <div>
        name:{" "}
        <input
          type="text"
          value={valueName}
          required
          onChange={handleChangeInputName}
        />
      </div>
      <div>
        number:{" "}
        <input
          type="phone"
          value={valuePhone}
          required
          onChange={handleChangeInputPhone}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
