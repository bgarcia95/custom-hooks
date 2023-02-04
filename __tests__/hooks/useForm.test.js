const { renderHook, act } = require("@testing-library/react");
const { useForm } = require("../../src/hooks");

describe('Tests on useForm', () => {

  const initialForm = {
    name: 'Brayan',
    email: 'brayan@gmail.com',
  };

  test('should return default values', () => {

    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });

  });

  test('should change name field on form', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const newValue = 'John';
    const target = { target: { name: 'name', value: newValue } };

    act(() => {
      result.current.onInputChange(target);
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

  });

  test('should trigger form reset', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm } = result.current;

    const newValue = 'John';
    const target = { target: { name: 'name', value: newValue } };

    act(() => {
      result.current.onInputChange(target);

      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

  });


})  