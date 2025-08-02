import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../../src/components/Hero";
import "@testing-library/jest-dom/vitest";

describe("Hero", () => {
  it("should render my name", () => {
    render(<Hero />);

    const headings = screen.getAllByRole("heading");
    expect(headings[0]).toHaveTextContent(/Sofia/i);
    expect(headings[1]).toHaveTextContent(/Frontend/i);
  });
});
