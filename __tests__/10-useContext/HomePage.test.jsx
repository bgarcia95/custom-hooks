import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/10-useContext/context/UserContext";
import { HomePage } from "../../src/10-useContext/HomePage";

describe("tests on <HomePage />", () => {
  const user = {
    id: 1,
    name: "Brayan",
  };

  test("should render component without user info", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should render component with user info", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name);
  });
});
