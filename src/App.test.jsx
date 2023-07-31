import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import App from "./App";

describe("App", () => {
  test("should be able to see initial text on screen", () => {
    const { debug } = render(<App />);

    debug();
  });
});
