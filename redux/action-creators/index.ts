import { Dispatch } from "react";
import { ActionType } from "../action-types/actionTypes";
import { CounterAction } from "../types/CountTypes";

export const addCounters = () => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({ type: ActionType.ADD });
  };
};
export const removeCounters = () => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({ type: ActionType.REMOVE });
  };
};
