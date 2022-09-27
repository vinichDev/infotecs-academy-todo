import React from 'react';
import './styles/App.scss';
import TodoWindow from "./components/TodoWindow/TodoWindow";
import {NotesProvider} from "./context/NotesContext";
import {EditProvider} from "./context/EditContext";

function App() {
  return (
    <NotesProvider>
      <EditProvider>
        <div className="bg">
          <TodoWindow/>
        </div>
      </EditProvider>
    </NotesProvider>
  );
}

export default App;
