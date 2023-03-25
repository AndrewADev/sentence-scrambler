export const simpleScramble = <T>(elements: T[]) => {
  let scrambled = [] as T[];
  const pool = [...elements];
  while (pool.length) {
    const index = Math.floor(Math.random() * pool.length);
    scrambled = scrambled.concat(pool.splice(index, 1));
  }
  return scrambled;
};
