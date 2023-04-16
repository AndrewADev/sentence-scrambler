import { describe, expect, it } from 'vitest';
import { joinSentences, splitInputToSentences } from './sentences';

const testSentences = [
  ['The quick brown fox', 'jumps', 'over', 'the lazy dog.'],
  ['The', 'waiter', 'brings', 'us', 'our', 'food.'],
  ['The', 'girl', 'rides', 'her', 'bike'],
  ['The', 'bird', 'flies'],
  ['A', 'hush', 'falls', 'over', 'the', 'crowd.'],
];

type TestCase = {
  data?: string[][];
  expected: string;
};

describe('joinSentences', () => {
  it('handles empty array', () => {
    const joined = joinSentences([]);
    expect(joined).toEqual('');
  });

  it.each([undefined])(`handles invalid data`, (val) => {
    const joined = joinSentences(val);
    expect(joined).toEqual('');
  });

  it.each([
    {
      data: testSentences,
      expected:
        'The quick brown fox, jumps, over, the lazy dog.\nThe, waiter, brings, us, our, food.\nThe, girl, rides, her, bike\nThe, bird, flies\nA, hush, falls, over, the, crowd.',
    },
  ])('handles valid data', ({ data, expected }: TestCase) => {
    const joined = joinSentences(data);
    expect(joined).toEqual(expected);
  });
});


describe("splitInputToSentences", () => {
  it("handles invalid data", () => {
    const split = splitInputToSentences(undefined);
    expect(split).toEqual([])
  })
})
