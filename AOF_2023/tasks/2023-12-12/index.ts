export async function conductInterviews(subjects: string[], interview: (message: string) => Promise<string>, timeLimit: number): Promise<string[]> {
  const results: string[] = [];
  for (const subject of subjects) {
    try {
      const resultPromise = interview(subject);
      const result = await Promise.race([
        resultPromise,
        new Promise((_, reject) => setTimeout(() => reject('Timeout'), timeLimit))
      ]);
      results.push(`${result}`);
    } catch (error) {
      let errorMessage;
      if (typeof error === 'string') {
        errorMessage = error.startsWith('Error: ') ? error : `Error: ${error}`;
      } else if (error instanceof Error) {
        errorMessage = error.message.startsWith('Error: ') ? error.message : `Error: ${error.message}`;
      } else {
        errorMessage = `Error: ${error}`;
      }
      results.push(errorMessage);
    }
  }
  return results;
}
