import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Products from "./Products";

xdescribe("Products component", () => {
  test("should render Products component correctly", () => {
    render(<Products />);
  });
});