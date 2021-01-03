// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/await-thenable */

// "@typescript/eslint/await-thenable": ["error"],
// Disallows awaiting a value that is not a Thenable
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/await-thenable.md


// BAD
export async function foo(): Promise<void> {
  await 'value'; // error here, await has no effect on this.
}

// GOOD
export async function bar(): Promise<void> {
  await Promise.resolve('value');
  await bar();
}
