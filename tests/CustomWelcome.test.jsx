import { describe, expect, it } from "vitest";
import Welcome from "../src/components/CustomWelcome";
import { render, screen } from "@testing-library/react";

describe("Welcome Component", () => {
  it("should render correctly", () => {
    render(<Welcome />);
    expect(screen.getByText(/Hey, nice to see you/i)).toBeInTheDocument();
  });

  it("should render the correct message", () => {
    render(<Welcome />);
    expect(screen.getByText(/Thank you for visiting my web sites/i)).toBeInTheDocument();
  });
});
