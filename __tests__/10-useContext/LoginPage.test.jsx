import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/10-useContext/context/UserContext";
import { LoginPage } from "../../src/10-useContext/LoginPage";

describe("tests on <LoginPage />", () => {
  test("should show component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call setUser when clicking button", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      email: "brayan@email.com",
      id: 123,
      name: "Brayan Garcia",
    });
  });
});
