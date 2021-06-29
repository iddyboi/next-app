import { ActionType } from "../action-types/actionTypes";

export interface AddAction {
  type: ActionType.ADD;
}
export interface RemoveAction {
  type: ActionType.REMOVE;
}
export type CounterAction = AddAction | RemoveAction;
