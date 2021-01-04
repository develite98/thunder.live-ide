// Bypass these rules to focus on the examples.
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { b } from './no-inferrable-types';

// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

// "@typescript/eslint/prefer-nullish-coalescing": ["error",{"ignoreConditionalTests":true,"ignoreMixedLogicalExpressions":true}],
// Enforce the usage of the nullish coalescing operator instead of logical chaining
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md


//- Nullish coalescing: "??" => Coalesces ONLY if original value is NULL or UNDEFINED
// - Logical/Operator coalescing: "||" => Coalesces on any falsy value (null, undefined, false, 0, NaN, '')
const emptyString: string = '';

// BAD
const logicalChaining: string = emptyString || 'Unsafe value'; // result is 'Unsafe value'
console.log(logicalChaining);

// GOOD
const nullishCoalescing: string = emptyString ?? 'Unsafe value'; // result is ''
console.log(nullishCoalescing);

// Option:
// -"ignoreConditionalTests":false, (default is true)
// -"ignoreMixedLogicalExpressions":false (default is true)
const firstString: string = '';
const secondString: string = '';
const thirdString: string = '';

// BAD
if (firstString || secondString) {
  // this if condition is equivalent to:
  // const c = firstVariable || secondVariable;
  // if (c) {..}
  console.log('Unsafe');
}

if (firstString || (secondString || thirdString)) {
  // this if condition is equivalent to:
  // const c = secondVariable || thirdVariable;
  // const d = firstVariable || c
  // if (d) {..}
  console.log('Unsafe');
}

// GOOD
if (firstString ?? secondString) {
  console.log('Safe');
}

if (firstString ?? (secondString ?? thirdString)) {
  console.log('Safe');
}
