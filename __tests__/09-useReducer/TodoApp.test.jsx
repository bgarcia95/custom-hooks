import { render, screen } from "@testing-library/react";

import { TodoApp } from "../../src/09-useReducer/TodoApp";
import { useTodo } from "../../src/09-useReducer/hooks/useTodo";

jest.mock("../../src/09-useReducer/hooks/useTodo");

describe("Tests on <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: true },
    ],
    onNewTodo: jest.fn(),
    onDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    totalTodos: 2,
    pendingTodos: 1,
  });

  test("should render component correctly", () => {
    render(<TodoApp />);

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
