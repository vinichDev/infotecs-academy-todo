import React, {MouseEventHandler, useRef, useState} from 'react';
import styles from './TodoList.module.scss'
import HeaderList from "../HeaderList/HeaderList";
import NotesList from "../NotesList/NotesList";

const TodoList = () => {
  const [query, setQuery] = useState("")
  const todoListBlock = useRef<HTMLDivElement>(null)
  const border = useRef<HTMLDivElement>(null);

  const onMouseDownHandler: MouseEventHandler = (e) => {
    if (!todoListBlock.current) return;
    const startX = e.clientX;
    const currentWidth = parseInt(window.getComputedStyle(todoListBlock.current).getPropertyValue('width'));

    const changeWidth = (e: MouseEvent) => {
      if (todoListBlock.current) {
        console.log(currentWidth + e.clientX - startX)
        todoListBlock.current.style.width = `${Math.max(Math.min(currentWidth + e.clientX - startX, 850), 3)}px`
      }
    }
    // console.log(1);

    document.onmousemove = (e: MouseEvent) => {
      // console.log(1);
      changeWidth(e);
    }
    // console.log(document.onmousemove)
    document.onmouseup = () => {
      console.log(1)

      document.onmousemove = null;
      document.onmouseup = null;
    }


  }


  return (
    <div ref={todoListBlock} className={styles.wrapper}>
      <div style={{width: "100%"}}>
        <HeaderList
          query={query}
          setQuery={setQuery}
        />
        <NotesList query={query.toLowerCase()}/>
      </div>
      <div
        ref={border}
        className={styles.border}
        onMouseDown={onMouseDownHandler}
      />
    </div>
  );
};

export default TodoList;