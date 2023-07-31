import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, beforeEach } from "vitest";
import { Dashboard } from "./index";
import { TodoProvider } from "../../context/TodosContext";

describe("Dashboard", () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <Dashboard />
      </TodoProvider>
    );
  });

  test("should render dashboard correctly", () => {
    expect(screen.getByTestId(`main`)).toBeInTheDocument();
  });
});
