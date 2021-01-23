import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  let linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("True tue", () => {
  expect(true).toBe(true);
});

test("True ee", () => {
  expect(true).toBe(true);
});
