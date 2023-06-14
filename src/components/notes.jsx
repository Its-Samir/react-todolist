import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Notes(props) {
  const [css, setCss] = useState(false);

  const handleChange = () => {
    setCss(!css);
  };

  return (
    <div className="notes">
      <div onClick={handleChange}
        style={{ textDecoration: css && "line-through red" }}
        className="noteContent"
      >
        {props.note}
      </div>
      <DeleteIcon onClick={() => { setCss(!css); props.onDelete(props.id) }} className="deleteBtn">
        Delete
      </DeleteIcon>
    </div>
  );
}
