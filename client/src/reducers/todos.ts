import {FetchTodosAction, Todo} from '../actions/index';
import { ActionTypes } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) =>
{
  switch(action.type)
  {
    case ActionTypes.fetchTodos:
      return action.payload;

    default:
      return state;
  }
};