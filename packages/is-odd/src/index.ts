import { isEven } from "@pkg/is-even";
export const isOdd = (x: number) => !isEven(x);
export const echo = (): string => "hello - is-odd";
