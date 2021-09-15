import { add } from "../sum";

test("Adds together 1 and 2, expects 3", () => {
  expect(add(1, 2)).toBe(3);
});
