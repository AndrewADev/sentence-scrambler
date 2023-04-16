export const joinSentences = (sentences: string[][] = []) => {
  // TODO: configurable join
  return sentences.map((sent) => sent?.join(', ')).join('\n');
};

export const splitInputToSentences = (rawText?: string) =>
  rawText?.split(/\n/).map((sent) => sent.split(',')) ?? [];
