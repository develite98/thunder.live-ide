// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/ban-ts-comment */

// TODO
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

// "@typescript/eslint/ban-ts-comment": ["error",{"ts-expect-error":"allow-with-description","ts-ignore":true,"ts-nocheck":true,"ts-check":false,"minimumDescriptionLength":3}],
// Bans `@ts-<directive>` comments from being used or requires descriptions after directive
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md

// BAD
if (false) {
  /*
  @ts-expect-error
   */
  console.log('Unreachable code error');
}

if (false) {
  /*
  @ts-expect-error: TODO
   */
  console.log('Unreachable code error');
}


if (false) {
  /*
  @ts-nocheck: Unreachable code error
  */
  console.log('Unreachable code error');
}

if (false) {
  /*
  @ts-ignore: Unreachable code error
  */
  console.log('Unreachable code error');
}

// GOOD:
if (false) {
  /**
   * @ts-expect-error: This is just an example of unreachable code, and need a comment with at least 6 characters.
   */
  console.log('Unreachable code error');
}

if (false) {
  // Do not use ts-ignore/ts-nocheck to ensure compiler warns about unreachable code error
  console.log('Unreachable code error');
}
