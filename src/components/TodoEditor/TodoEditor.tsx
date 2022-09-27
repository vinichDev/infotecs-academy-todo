import React from 'react';
import {useEditState} from "../../context/EditContext";
import EditNote from "../EditNote/EditNote";

const TodoEditor = () => {
  const noteId = useEditState();

  if (noteId !== -1) {
    return <EditNote noteId={noteId}/>
  }

  return <></>
};

export default TodoEditor;