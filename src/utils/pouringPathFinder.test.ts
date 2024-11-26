import { describe, expect, test } from "vitest";
import { findOptimalPath } from "./pouringPathFinder";

describe("Water Pouring Function", () => {
  test("(10 , 2 , 4 ) ---> [ [0, 2], [2, 0], [2, 2] [4, 0] ]", () => {
    expect(findOptimalPath(10, 2, 4, true)).toStrictEqual([
      [0, 2],
      [2, 0],
      [2, 2],
      [4, 0],
    ]);
  });

  test("(2, 4, 12 ) ---> 'Values must be greater or equal to desired amount' because X and Y are smaller than Z", () => {
    expect(findOptimalPath(2, 4, 12, true)).toStrictEqual([
      "Values must be greater or equal to desired amount",
    ]);
  });

  test("(100, 236, 120) Large numbers ---> [[0, 100],[100, 100], [0, 200],[100, 200],[64, 236],[64, 0],[0, 64],[100, 64],[0, 164],[100, 164],[28, 236],[28, 0],[0, 28],[100, 28],[0, 128],[100, 128],[0, 228],[100, 228],[92, 236],[92, 0],[0, 92],[100, 92],[0, 192],[100, 192],[56, 236],[56, 0],[0, 56],[100, 56],[0, 156],[100, 156],[20, 236],[20, 0],[0, 20],[100, 20],[0, 120]]", () => {
    expect(findOptimalPath(100, 236, 120, true)).toStrictEqual([
      [100, 0],
      [0, 100],
      [100, 100],
      [0, 200],
      [100, 200],
      [64, 236],
      [64, 0],
      [0, 64],
      [100, 64],
      [0, 164],
      [100, 164],
      [28, 236],
      [28, 0],
      [0, 28],
      [100, 28],
      [0, 128],
      [100, 128],
      [0, 228],
      [100, 228],
      [92, 236],
      [92, 0],
      [0, 92],
      [100, 92],
      [0, 192],
      [100, 192],
      [56, 236],
      [56, 0],
      [0, 56],
      [100, 56],
      [0, 156],
      [100, 156],
      [20, 236],
      [20, 0],
      [0, 20],
      [100, 20],
      [0, 120],
    ]);
  });
  test("(3, 7, 5) Odd numbers ---> [[0,7],[3,4],[0,4],[3,1],[0,1],[1,0],[1,7],[3,5]]", () => {
    expect(findOptimalPath(3, 7, 5, true)).toStrictEqual([
      [0, 7],
      [3, 4],
      [0, 4],
      [3, 1],
      [0, 1],
      [1, 0],
      [1, 7],
      [3, 5],
    ]);
  });

  test("(12, 27, 18) Odd and even numbers with Z as even ---> [[0,27],[12,15],[0,15],[12,3],[0,3],[3,0],[3,27],[12,18]]", () => {
    expect(findOptimalPath(12, 27, 18, true)).toStrictEqual([
      [0, 27],
      [12, 15],
      [0, 15],
      [12, 3],
      [0, 3],
      [3, 0],
      [3, 27],
      [12, 18],
    ]);
  });
  test("(6, 13, 7) Odd and even numbers with Z as odd ---> [[0,27],[12,15],[0,15],[12,3],[0,3],[3,0],[3,27],[12,18]]", () => {
    expect(findOptimalPath(6, 13, 7, true)).toStrictEqual([
      [0, 13],
      [6, 7],
    ]);
  });
  test("(0, 0, 2) ---> 'Values must be greater than 0' because both jugs should be grater than 0", () => {
    expect(findOptimalPath(0, 0, 12, true)).toStrictEqual([
      "Values must be greater than 0",
    ]);
  });
  test("(2.5, 8, 4) ---> 'Both entry jugs must be an integer' because both jugs should be integers", () => {
    expect(findOptimalPath(2.5, 8, 6, true)).toStrictEqual([
      "Both entry jugs must be an integer",
    ]);
  });
  test("(4/8, 10, 4/2) ---> 'Both entry jugs must be an integer' because both jugs should be integers", () => {
    expect(findOptimalPath(4 / 8, 10, 4 / 2, true)).toStrictEqual([
      "Both entry jugs must be an integer",
    ]);
  });
  test("(2, 4, 4) ---> [0, 4] Output should be 1 step because is the shortest ", () => {
    expect(findOptimalPath(10, 4, 4, true)).toStrictEqual([[0, 4]]);
  });
});
