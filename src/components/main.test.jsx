import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "./main";

describe("Home component", () => {
  test("should render Home component correctly", () => {
    render(<Home />);
    //screen.logTestingPlaygroundURL();
    const element = screen.getByRole('img', {name: /card/i})
    expect(element).toBeInTheDocument();
  });
});