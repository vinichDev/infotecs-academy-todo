import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './HeaderList.module.scss'
import PlusIcon from "../UI/PlusIcon/PlusIcon";
import {useNotesDispatch} from "../../context/NotesContext";
import {NotesActionType} from "../../types/notes";

interface HeaderListProps {
  query: string,
  setQuery: Dispatch<SetStateAction<string>>
}

const HeaderList: FC<HeaderListProps> = ({query, setQuery}) => {
  const dispatch = useNotesDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title1}>TODO LIST</div>
      <input className={styles.search}
             placeholder="Найдите заметку"
             value={query}
             onChange={e => {
               setQuery(e.target.value)
             }}/>
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