import React, {FC} from 'react';
import styles from './Note.module.scss';
import IndicatorIcon from "../UI/IndicatorIcon/IndicatorIcon";
import {NoteStatus} from "../../types/notes";
import {useEditDispatch} from "../../context/EditContext";
import {EditActionType} from "../../types/edit";

interface NoteProps {
  title: string,
  indicator: NoteStatus
  id: number
}

const Note: FC<NoteProps> = ({title, indicator, id}) => {
  const dispatch = useEditDispatch();

  return (
    <div className={styles.wrapper} onClick={() => dispatch({type: EditActionType.Select, payload: id})}>
      <div className={styles.title}>{title}</div>
      <IndicatorIcon className={styles.indicator} inlineStyles={{fill: indicator}}/>
    </div>
  );
};

export default Note;