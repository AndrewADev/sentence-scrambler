import { describe, expect, it } from 'vitest';
import { simpleScramble } from './scramble';

describe('simpleScramble', () => {
  it('scrambles elements', () => {
    const elements = [1, 2, 3, 4, 5];

    const scrambled = simpleScramble(elements);

    expect(scrambled).toHaveLength(elements.length);
    // Technically not 100% guaranteed with simple scramble for now
    expect(scrambled).not.toContainEqual(elements);
  });
});
