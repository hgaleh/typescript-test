function solution(A: number[]) {
  let i = 1;
  while (found(i, A)) {
    i++;
  };
  return i;
}

function found(num: number, A: number[]): boolean {
  return A.indexOf(num) > -1;
}

describe('interview', () => {
  describe('solution', () => {
    it('test1', () => {
      expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
    });

    it('test2', () => {
      expect(solution([1, 2, 3])).toBe(4);
    });

    it('test3', () => {
      expect(solution([-1, -3])).toBe(1);
    });
  });

  describe('not found', () => {
    it('test 1', () => {
      expect(found(10, [1, 2, 5])).toBeFalse();
    });

    it('test 2', () => {
      expect(found(10, [1, 10, 5])).toBeTrue();
    });
  });
});
