import React, { useState } from "react";

export const CreateArea = (props) => {
  const [note, setNote] = useState({
    note: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  function handleSubmit(event) {

    event.preventDefault();

    if (note.note.length !== 0) {
      props.onAdd(note);
    }

    setNote({
      note: ""
    });
  }

  return (
    <div className="inputArea">
      <form onSubmit={handleSubmit} action="">
        <input className="inputBox"
          placeholder='Add a note'
          spellCheck='false'
          onChange={handleChange}
          value={note.note}
          name="note"
          type="text"
        />
        <button className="submitBtn">
          Add
        </button>
      </form>
    </div>
  );
};
