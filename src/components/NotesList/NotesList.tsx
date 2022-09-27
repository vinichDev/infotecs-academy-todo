import React from 'react';
import styles from './_NotesList.module.scss'
import Note from "../Note/Note";
import {useNotesState} from "../../context/NotesContext";

const NotesList = () => {
  const notes = useNotesState();

  return (
    <div className={styles.wrapper}>
      {notes.map((note, index) => (
        <Note key={note.id} title={note.title} indicator={note.status} index={index}/>
      ))}
    </div>
  );
};

export default NotesList;