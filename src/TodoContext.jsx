import React from 'react';
import { useState } from 'react';

const TodoContext = React.createContext({
    notes: [],
    onSubmit: (newNote) => { },
    onDelete: (id) => { }
});

export function TodoContextProvider(props) {

    let getData = JSON.parse(localStorage.getItem('notes')) || [];
    const [notes, setNotes] = useState(getData);

    function submitNote(newNote) {

        const inputData = { id: new Date().getTime().toString(), ...newNote };

        getData.unshift(inputData);

        localStorage.setItem('notes', JSON.stringify(getData));

        setNotes(() => {
            return [...getData];
        });

    }

    function deleteNote(id) {

        const filteredItems = getData.filter((item) => {
            return item.id !== id;
        });

        localStorage.setItem('notes', JSON.stringify(filteredItems));
        setNotes(filteredItems);
    }

    return (
        <TodoContext.Provider value={{ notes: notes, onSubmit: submitNote, onDelete: deleteNote }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContext;