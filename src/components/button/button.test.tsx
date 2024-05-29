import React from "react";
import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "@/components/button/button";

describe("Button Component Test", () => {
  it("renders button label", () => {
    render(<Button data-testid="button">Primary</Button>);

    expect(screen.getByTestId("button").textContent).toBe("Primary");

    screen.debug();
  });

  it("call onClick handle when clicked", () => {
    const handleClick = vi.fn();

    render(
      <Button data-testid="button" onClick={handleClick}>
        Primary
      </Button>
    );

    const buttonElement = screen.getByTestId("button");

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);

    screen.debug();
  });

  it("forward ref to button element", () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Primary</Button>);

    expect(ref.current).toBeTruthy();

    screen.debug();
  });

  it("renders default props", () => {
    render(<Button data-testid="button">Default Button</Button>);

    expect(
      screen.getByTestId("button").classList.contains("bg-blue-500")
    ).toBeTruthy();

    expect(
      screen.getByTestId("button").classList.contains("px-3")
    ).toBeTruthy();

    screen.debug();
  });
});
