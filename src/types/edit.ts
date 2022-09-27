export enum EditActionType {
  Select = "SELECT",
  Reset = "RESET"
}

export type EditAction = SelectEditAction | ResetEditAction;

export interface SelectEditAction {
  type: EditActionType.Select,
  payload: number
}

export interface ResetEditAction {
  type: EditActionType.Reset,
}

export type EditDispatch = (action: EditAction) => void;

