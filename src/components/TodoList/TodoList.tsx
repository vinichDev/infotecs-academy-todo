import React from 'react';
import styles from './TodoList.module.scss'
import HeaderList from "../HeaderList/HeaderList";
import NotesList from "../NotesList/NotesList";

const TodoList = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderList/>
      <NotesList/>
    </div>
  );
};

export default TodoList;