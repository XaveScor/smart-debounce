import { debounce } from "../src";
import { expectType } from "tsd";

describe("simple debounce", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("main", () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, { maxTimeout: 50 });

    expect(fn).toBeCalledTimes(0);

    debouncedFn();
    jest.runTimersToTime(10);
    debouncedFn();
    jest.runTimersToTime(40);

    expect(fn).toBeCalledTimes(0);

    jest.runTimersToTime(9);
    expect(fn).toBeCalledTimes(0);

    jest.runTimersToTime(1);
    expect(fn).toBeCalledTimes(1);
  });

  it("types", () => {
    const fn = (a: number, b: string) => {};

    expectType<typeof fn>(debounce(fn));
  });
});
