import { todoReducer } from "../../src/09-useReducer/todoReducer";

describe('Tests on todoReducer', () => {

  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    }
  ];

  test('should return initial state', () => {

    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);

  });

  test('should add a todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'New Todo #2',
        done: false,
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);

  });

  test('should remove a todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);

  });

  test('should toggle a todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
    
    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBeFalsy();

  });


})