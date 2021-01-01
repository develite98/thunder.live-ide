// TODO: naming-convention, no-type-alias
// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @thunder-angular/no-magic-numbers */

// This rule is customized to support `ignoreClassProperties` option.
// @see libs ./eslint/lib/override-rules/no-magic-numbers.js

// "@typescript/eslint/no-magic-numbers": ["error",{"ignore":[],"ignoreArrayIndexes":false,"enforceConst":false,"detectObjects":false,"ignoreNumericLiteralTypes":false,"ignoreEnums":false,"ignoreReadonlyClassProperties":false}],
// Disallow magic numbers
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md

// BAD
export const badPrice: number = 100 * 0.25;
export const badArray: number[] = [1, 2, 3];


// GOOD
export const price: number = 100;
export const taxPercentage: number = 0.25;
export const goodPrice: number = price * taxPercentage;

export const foo: number = 1;
export const baz: number = 2;
export const bar: number = 3;
export const goodArray: number[] = [foo, baz, bar];

/**
 * ignoreArrayIndexes: false
 */
const one: number = 1;
const two: number = 2;
const three: number = 3;
const arrayIndexes: number[] = [one, two, three];

// BAD
export const badItem: number = arrayIndexes[1];

// GOOD
const goodIndex: number = 1;
export const goodItem: number = arrayIndexes[goodIndex];


/**
 * ignoreDefaultValues: false
 */

// Best practices
interface IAccountancy {
  tax?: number;
}
const accountancy: IAccountancy  = {};
const { tax }: IAccountancy = accountancy;
console.log(tax);

/**
 * ignoreEnums: true
 */

// Best practices
export enum FilePermissions   {
  Read = 1,
  Write = 2,
  Execute = 4,
  ReadExecute = Read | Execute,
  ReadWriteExecute = Read | Write | Execute
}

/**
 * ignoreNumericLiteralTypes: true
 */

// Best practices
export type SmallPrimes = 2 | 3 | 5 | 7 | 11;

/**
 * ignoreClassProperties: true
 */

// Best practices
export class GoodPropClass {
  public score: number = 100;
}
