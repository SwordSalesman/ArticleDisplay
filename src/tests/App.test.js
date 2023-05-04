import { render, screen } from "@testing-library/react";
import App from "../App";
import Header from "../components/Header";

test("Renders title of article", () => {
  render(<Header headline="My headline" />);
  const linkElement = screen.getByText("My headline");
  expect(linkElement).toBeInTheDocument();
});

test("Renders date correctly", () => {
  render(<Header date="2020-09-02T01:00:00.000Z" />);
  const date = screen.getByText("Wed, Sep 02 2020 9:00:00 AM");
  expect(date).toBeInTheDocument();
});

// For a real project, I would continue with more extensive unit / integration tests
