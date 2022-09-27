export type Notes = Array<Note>

export interface Note {
  id: number,
  title: string,
  description: string
  status: NoteStatus
}

export enum NoteStatus {
  Waiting = "#c5c5c5",
  InProcess = "#aaceee",
  Done = "#a1e19a"
}

export enum NotesActionType {
  Add = "ADD",
  Remove = "REMOVE",
  EditTitle = "EDIT_TITLE",
  EditDescription = "EDIT_DESCRIPTION",
  EditStatus = "EDIT_STATUS"
}

export type NotesAction =
  AddNotesAction
  | EditTitleNotesAction
  | EditDescriptionNotesAction
  | EditStatusNotesAction
  | RemoveNotesAction

export interface AddNotesAction {
  type: NotesActionType.Add
}

export interface EditTitleNotesAction {
  type: NotesActionType.EditTitle
  payload: { index: number, title: string }
}

export interface EditDescriptionNotesAction {
  type: NotesActionType.EditDescription
  payload: { index: number, description: string }

}

export interface EditStatusNotesAction {
  type: NotesActionType.EditStatus
  payload: { index: number, status: NoteStatus }

}

export interface RemoveNotesAction {
  type: NotesActionType.Remove
  payload: { index: number }
}

export type NotesDispatch = (action: NotesAction) => void;
