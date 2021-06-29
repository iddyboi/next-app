import { ActionType } from "../action-types/actionTypes";
import { CounterAction } from "../types/CountTypes";
const initialState = 1;

type State = typeof initialState;

export const countReducer = (
  state: State = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case ActionType.ADD:
      return state + 1;
    case ActionType.REMOVE:
      return state - 1;
    default:
      return state;
  }
};
