import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, beforeEach } from "vitest";
import { TodoCard } from "./index";
import { TodoProvider } from "../../context/TodosContext";

describe("TodoCard", () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <TodoCard TodoKey="test" />
      </TodoProvider>
    );
  });

  test("should render card correctly", () => {
    expect(screen.getByTestId(`card`)).toBeInTheDocument();
    expect(screen.getByTestId(`card-header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-button-save-and-edit`)).toBeInTheDocument();
    expect(screen.getByTestId(`form`)).toBeInTheDocument();
    expect(screen.getByTestId(`input-title`)).toBeInTheDocument();
    expect(screen.getByTestId(`text-area-description`)).toBeInTheDocument();
    expect(screen.getByTestId(`card-footer`)).toBeInTheDocument();
    expect(screen.getByTestId(`footer-button`)).toBeInTheDocument();
  });
});
