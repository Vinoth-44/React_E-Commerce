import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from "./Footer";

describe("Footer component", () => {
  test("should render Footer component correctly", () => {
    render(<Footer />);
    //screen.logTestingPlaygroundURL();
    const element = screen.getByRole('link', {name: /vinothkumar pandurangan/i})
    expect(element).toBeInTheDocument();
  });
});