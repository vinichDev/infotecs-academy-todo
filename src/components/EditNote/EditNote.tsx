import React, {FC} from 'react';
import {useNotesDispatch, useNotesState} from "../../context/NotesContext";
import styles from "./EditNote.module.scss";
import {NotesActionType, NoteStatus} from "../../types/notes";
import {useEditDispatch} from "../../context/EditContext";
import {EditActionType} from "../../types/edit";
import DeleteIcon from "../../images/DeleteIcon.svg";

const EditNote: FC<{ noteId: number }> = ({noteId}) => {
  const notes = useNotesState();
  const dispatchNotes = useNotesDispatch()
  const dispatchEdit = useEditDispatch();

  const noteIndex = notes.findIndex(note => note.id === noteId)
  const note = notes[noteIndex];

  if(note === undefined) {
    dispatchEdit({type: EditActionType.Reset});
    return <></>
  }

  const title = note.title;
  const description = note.description;
  const status = note.status

  const statusHandler = (newStatus: NoteStatus) => {
    if (status != newStatus) {
      dispatchNotes({
        type: NotesActionType.EditStatus,
        payload: {
          index: noteIndex,
          status: newStatus
        }
      })
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.indicators}>
          <button
            className={styles.indicator}
            style={status == NoteStatus.Waiting ? {borderColor: NoteStatus.Waiting} : {}}
            onClick={() => {
              statusHandler(NoteStatus.Waiting);
            }}
          >
            ожидает
          </button>
          <button
            className={styles.indicator}
            style={status == NoteStatus.InProcess ? {borderColor: NoteStatus.InProcess} : {}}
            onClick={() => {
              statusHandler(NoteStatus.InProcess);
            }}
          >
            в процессе
          </button>
          <button
            className={styles.indicator}
            style={status == NoteStatus.Done ? {borderColor: NoteStatus.Done} : {}}
            onClick={() => {
              statusHandler(NoteStatus.Done);
            }}
          >
            выполнена
          </button>
        </div>
        <button className={styles["delete-btn"]}
          onClick={() => {
            dispatchEdit({type: EditActionType.Reset})
            dispatchNotes({
              type: NotesActionType.Remove,
              payload: {
                index: noteIndex
              }
            })
          }}
        >
          <img className={styles["delete-icon"]} src={DeleteIcon} alt="удалить"/>
        </button>
      </div>
      <input className={styles.title}
             value={title}
             onChange={e => {
               dispatchNotes({
                 type: NotesActionType.EditTitle,
                 payload: {
                   index: noteId,
                   title: e.target.value
                 }
               })
             }}/>
      <textarea
        className={styles.description}
        value={description}
        onChange={e => {
          dispatchNotes({
            type: NotesActionType.EditDescription,
            payload: {
              index: noteIndex,
              description: e.target.value
            }
          })
        }}
      />
    </div>
  );
};

export default EditNote;
