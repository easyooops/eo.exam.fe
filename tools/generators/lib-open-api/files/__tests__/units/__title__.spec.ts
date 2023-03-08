import { numbers } from "../mocks/MockDatas";

describe("pet-store-api Jnit Test", () => {
  test("Test 1 + 2 = 3", () => {
    return expect(numbers[0] + numbers[1]).toEqual(3);
  });
});
