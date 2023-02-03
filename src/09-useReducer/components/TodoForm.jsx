import { useRef } from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoForm = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (description.length === 0) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="What to do?"
        value={description}
        name="description"
        onChange={onInputChange}
      />

      <button className="btn btn-outline-primary mt-2" type="submit">
        Add
      </button>
    </form>
  );
};
