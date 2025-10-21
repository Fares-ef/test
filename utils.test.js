import { expect, test } from "@jest/globals";
import { greeting } from "./utils.js";

test("greeting formats correctly", () => {
  expect(greeting("AWS")).toBe("Hello from AWS!");
});
