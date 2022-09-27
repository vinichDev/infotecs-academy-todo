import React, {createContext, FC, ReactNode, useContext, useReducer} from 'react';
import {NotesAction, NotesDispatch, Notes, NotesActionType, NoteStatus} from "../types/notes";

const NotesStateContext = createContext<Notes | undefined>(undefined);
const NotesDispatchContext = createContext<NotesDispatch | undefined>(undefined);

const notesReducer = (state: Notes, action: NotesAction) => {
  switch(action.type){
    case NotesActionType.Add: {
      return [...state, {
        id: state.length ? state[state.length - 1].id + 1 : 0,
        title: "Новая заметка",
        description: "",
        status: NoteStatus.Waiting
      }]
    }
    case NotesActionType.EditTitle: {
      state[action.payload.index].title = action.payload.title;
      return [...state];
    }
    case NotesActionType.EditDescription: {
      state[action.payload.index].description = action.payload.description;
      return [...state];
    }
    case NotesActionType.EditStatus: {
      state[action.payload.index].status = action.payload.status;
      return [...state];
    }
    case NotesActionType.Remove: {
      state.splice(action.payload.index, 1);
      return [...state];
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

type NotesProviderProps = {children: ReactNode};

export const NotesProvider: FC<NotesProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesStateContext.Provider value={state}>
      <NotesDispatchContext.Provider value={dispatch}>{children}</NotesDispatchContext.Provider>
    </NotesStateContext.Provider>
  );
};

export const useNotesState = () => {
  const context = useContext(NotesStateContext)
  if (context === undefined) {
    throw new Error('useNotesState must be used within a NotesProvider')
  }
  return context
}

export const useNotesDispatch = () => {
  const context = useContext(NotesDispatchContext)
  if (context === undefined) {
    throw new Error('useNotesDispatch must be used within a NotesProvider')
  }
  return context
}