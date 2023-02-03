import { useEffect, useReducer } from "react";

import { todoReducer } from '../todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const pendingTodos = todos.filter(todo => !todo.done).length;
  const totalTodos = todos.length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const onDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const onToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    totalTodos,
    pendingTodos,
  };
}
