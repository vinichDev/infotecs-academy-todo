import React from 'react';
import styles from './TodoWindow.module.scss'
import TodoList from "../TodoList/TodoList";
import TodoEditor from "../TodoEditor/TodoEditor";

const TodoWindow = () => {
  return (
    <div className={styles.window}>
      <TodoList/>
      <TodoEditor/>
    </div>
  );
};

export default TodoWindow;