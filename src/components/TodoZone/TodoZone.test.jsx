import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, beforeEach } from "vitest";
import { TodoZone } from "./index";
import { TodoProvider } from "../../context/TodosContext";

describe("TodoZone", () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <TodoZone borderColor="white" status="todo" title="A fazeres" />
      </TodoProvider>
    );
  });

  test("should render zone correctly", () => {
    expect(screen.getByTestId(`zone-todo`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-zone-todo`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-zone-title-todo`)).toHaveTextContent("A fazeres");
    expect(screen.getByTestId(`header-zone-button-todo`)).toBeInTheDocument();
    expect(screen.getByTestId(`overflow-zone-todo`)).toBeInTheDocument();
  });
});
