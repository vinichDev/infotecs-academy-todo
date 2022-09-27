import React from 'react';
import styles from './_HeaderList.module.scss'
import PlusIcon from "../UI/PlusIcon/PlusIcon";
import {useNotesDispatch} from "../../context/NotesContext";
import {NotesActionType} from "../../types/notes";

const HeaderList = () => {
  const dispatch = useNotesDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title1}>TODO LIST</div>
      <button
        className={styles["create-note-btn"]}
        onClick={() => dispatch({type: NotesActionType.Add})}
      >
        <PlusIcon className={styles["btn-icon"]}/>
      </button>
    </div>
  );
};

export default HeaderList;