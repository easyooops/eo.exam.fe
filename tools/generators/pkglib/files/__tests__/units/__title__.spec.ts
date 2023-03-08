import { numbers } from "../mocks/MockDatas";
import { add } from "../../src/index";

describe("<%= title %> Jnit Test", () => {
  test("Add Test", () => {
    return expect(add(numbers[0], numbers[1])).toEqual(1);
  });
});
