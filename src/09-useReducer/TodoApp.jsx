import { useEffect } from "react";
import { useReducer } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    totalTodos,
    pendingTodos,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: ({totalTodos}), <small> Pending: ({pendingTodos})</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />

          <TodoForm onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
