import { act, fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/09-useReducer/components/TodoItem";

describe("Tests on <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Soul stone",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show pending todo", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toBe("align-self-center ");
  });

  test("should show done todo", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toBe(
      "align-self-center text-decoration-line-through"
    );
  });

  test("span should trigger onToggleTodo when clicked", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("button should trigger onDeleteTodo when clicked", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
