// TODO: Review later
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */

// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/prefer-literal-enum-member */

// "@typescript/eslint/prefer-literal-enum-member": ["error"],
// Require that all enum members be literal values to prevent unintended enum member name shadow issues
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md


// Bad
const outScopeVariable: number = 1;
enum BadValueAssignment {
  A = outScopeVariable, // <= Variable assignment
  B = {}, // <= Object assignment
  D = `A ${value} template literal string`, // <= Template literal
  E = new Set(outScopeVariable, outScopeVariable), // <= Constructor in assignment
  F = outScopeVariable + outScopeVariable // <= Expression assignment
}

// Good
enum GoodValueAssignment {
  A = false,
  B = 'TestStr', // A regular string
  C = 4, // A number
  D = null,
  E = /some_regex/
}


