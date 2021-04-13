// import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
// import userEvent from "@testing-library/user-event";

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

test("hello world", () => {
  render(<p>Hello Jest!</p>);
  expect(screen.getByText("Hello Jest!")).toBeInTheDocument();
});

//Testing rendering
describe("Testing rendering of all React components", () => {
  test("displays 'New quote' button ", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /New quote/i })
    ).toBeInTheDocument();
  });

  test("displays 'twitter' button ", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /twitter share button/i })
    ).toBeInTheDocument();
  });

  test("displays 'tumblr' button ", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /tumblr share button/i })
    ).toBeInTheDocument();
  });

  test("displays current quote", () => {
    render(<App />);
    expect(
      screen.getByRole("contentinfo", { name: /quote/i })
    ).toBeInTheDocument();
  });

  test("displays quote author", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /author of quote/i })
    ).toBeInTheDocument();
  });
});

//Testing user interaction
//   test("displays a new quote when button is clicked", () => {
//     const { getByTestId } = render(<App />);

//     expect(screen.getByRole('button', {name: /New quote/i })).toBeInTheDocument();

// })
