import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MainApp } from "../../src/10-useContext/MainApp";

describe("Tests on <MainApp />", () => {
  test("should show HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test("should show Loginpage", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('LoginPage')).toBeTruthy();

    screen.debug();
  });
});
