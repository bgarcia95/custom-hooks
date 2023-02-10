const { render, screen } = require("@testing-library/react");
const {
  MultipleCustomHooks,
} = require("../../src/03-examples/MultipleCustomHooks");
const { useFetch } = require("../../src/hooks/useFetch");

jest.mock("../../src/hooks/useFetch");

describe("Tests on <MultipleCustomHooks />", () => {
  test("should return default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Breaking Bad Quotes"));

    const button = screen.getByRole("button", { name: "Next quote" });

    expect(button.disabled).toBeTruthy();
    // screen.debug();
  });

  test("should show a quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Brayan", quote: "Hello World" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Hello World")).toBeTruthy();
    expect(screen.getByText("Brayan")).toBeTruthy();

    const button = screen.getByRole("button", { name: "Next quote" });

    expect(button.disabled).toBeFalsy();

  });


});
