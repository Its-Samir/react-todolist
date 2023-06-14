import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import { CreateArea } from "./components/createArea";
import Notes from "./components/notes";
import Weekday from "./components/Weekday";

export default function App() {

  const ctx = useContext(TodoContext);

  return (
    <div className="mainContainer">
      <img
        className="todoImg"
        src="./todo icon.png"
        alt=""
      />
      <Weekday />
      <div className="container">
        <CreateArea onAdd={ctx.onSubmit} />
        {ctx.notes.map((eachNote) => {
          return (
            <Notes
              key={eachNote.id}
              id={eachNote.id}
              onDelete={ctx.onDelete}
              note={eachNote.note}
            />
          );
        })}
      </div>
    </div>
  );
}
