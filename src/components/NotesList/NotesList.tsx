import React, {FC} from 'react';
import styles from './NotesList.module.scss'
import Note from "../Note/Note";
import {useNotesState} from "../../context/NotesContext";

interface NotesListProps {
  query: string;
}

const NotesList: FC<NotesListProps> = ({query}) => {
  const notes = useNotesState();
  const list = notes.filter((note) => note.title.toLowerCase().includes(query))

  return (
    <div className={styles.wrapper}>
      {list.map((note) => (
        <Note key={note.id} title={note.title} indicator={note.status} id={note.id}/>
      ))}
    </div>
  );
};

export default NotesList;
