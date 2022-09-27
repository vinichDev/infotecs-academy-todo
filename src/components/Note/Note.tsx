import React, {FC} from 'react';
import styles from './_Note.module.scss';
import IndicatorIcon from "../UI/IndicatorIcon/IndicatorIcon";
import {NoteStatus} from "../../types/notes";
import {useEditDispatch} from "../../context/EditContext";
import {EditActionType} from "../../store/edit";

interface NoteProps {
  title: string,
  indicator: NoteStatus
  index: number
}

const Note: FC<NoteProps> = ({title, indicator, index}) => {
  const dispatch = useEditDispatch();

  return (
    <div className={styles.wrapper} onClick={() => dispatch({type: EditActionType.Select, payload: index})}>
      <div className={styles.title}>{title}</div>
      <IndicatorIcon className={styles.indicator} inlineStyles={{fill: indicator}}/>
    </div>
  );
};

export default Note;