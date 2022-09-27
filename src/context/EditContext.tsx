import React, {createContext, FC, ReactNode, useContext, useReducer} from 'react';
import {EditAction, EditDispatch, EditActionType} from "../store/edit";

const EditStateContext = createContext<number | undefined>(undefined);
const EditDispatchContext = createContext<EditDispatch | undefined>(undefined);

const EditReducer = (state: number, action: EditAction) => {
  switch (action.type) {
    case EditActionType.Reset: {
      return -1;
    }
    case EditActionType.Select: {
      return action.payload;
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

type EditProviderProps = {children: ReactNode};

export const EditProvider: FC<EditProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(EditReducer, -1);

  return (
    <EditStateContext.Provider value={state}>
      <EditDispatchContext.Provider value={dispatch}>{children}</EditDispatchContext.Provider>
    </EditStateContext.Provider>
  );
};

export const useEditState = () => {
  const context = useContext(EditStateContext)
  if (context === undefined) {
    throw new Error('useEditState must be used within a EditProvider')
  }
  return context
}

export const useEditDispatch = () => {
  const context = useContext(EditDispatchContext)
  if (context === undefined) {
    throw new Error('useEditDispatch must be used within a EditProvider')
  }
  return context;
}