module.exports = {
  rules: {
    'no-magic-numbers': require('./override-rules/no-magic-numbers').default
  },
  configs: {
    'strict-typescript': {
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/all'],
      overrides: [
        {
          files: ['*.ts'],
          rules: {
            // Best Practices
            '@typescript-eslint/adjacent-overload-signatures': ['error'],
            '@typescript-eslint/await-thenable': ['error'],
            '@typescript-eslint/ban-ts-comment': [
              'error',
              {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': true,
                'ts-nocheck': true,
                'ts-check': false,
                minimumDescriptionLength: 6
              }
            ],
            '@typescript-eslint/ban-types': ['error', {}],
            '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
            '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }],
            '@typescript-eslint/default-param-last': ['error'],
            '@typescript-eslint/dot-notation': [
              'error',
              { allowPrivateClassPropertyAccess: false, allowProtectedClassPropertyAccess: false, allowKeywords: true, allowPattern: '' }
            ],
            '@typescript-eslint/method-signature-style': ['error', 'property'],
            '@typescript-eslint/no-base-to-string': ['error', { ignoredTypeNames: ['RegExp'] }],
            '@typescript-eslint/no-confusing-void-expression': ['error', {}],
            '@typescript-eslint/no-duplicate-imports': ['error', { includeExports: false }],
            '@typescript-eslint/no-dynamic-delete': ['error'],
            '@typescript-eslint/no-empty-function': ['error', { allow: [] }],
            '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: false }],
            '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: false, ignoreRestArgs: false }],
            '@typescript-eslint/no-extraneous-class': [
              'error',
              { allowConstructorOnly: false, allowEmpty: false, allowStaticOnly: false, allowWithDecorator: true }
            ],
            '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: false }],
            '@typescript-eslint/no-for-in-array': ['error'],
            '@typescript-eslint/no-implicit-any-catch': ['error', { allowExplicitAny: false }],
            '@typescript-eslint/no-implied-eval': ['error'],
            // Default options: ['error', { ignoreParameters: true, ignoreProperties: true }],
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: true }],
            '@typescript-eslint/no-invalid-void-type': ['error', { allowInGenericTypeArguments: true, allowAsThisParameter: false }],
            '@typescript-eslint/no-loop-func': ['error'],
            '@typescript-eslint/no-magic-numbers': 'off',
            '@thunder-angular/no-magic-numbers': [
              'error',
              {
                ignore: [],
                ignoreArrayIndexes: false,
                ignoreDefaultValues: true,
                enforceConst: false,
                detectObjects: false,
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
                ignoreClassProperties: true
              }
            ],
            '@typescript-eslint/no-misused-new': ['error'],
            '@typescript-eslint/no-misused-promises': ['error', { checksConditionals: true, checksVoidReturn: true }],
            '@typescript-eslint/no-namespace': ['error', { allowDeclarations: false, allowDefinitionFiles: true }],
            '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true, ignoreDeclarationMerge: true }],
            '@typescript-eslint/no-require-imports': ['error'],
            '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true, allowedNames: [] }],
            '@typescript-eslint/no-throw-literal': ['error'],
            '@typescript-eslint/no-unnecessary-condition': [
              'error',
              { allowConstantLoopConditions: false, allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false }
            ],
            '@typescript-eslint/no-unnecessary-qualifier': ['error'],
            '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
            '@typescript-eslint/no-unnecessary-type-assertion': ['error', {}],
            '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
            '@typescript-eslint/no-unused-expressions': [
              'error',
              { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false }
            ],
            '@typescript-eslint/no-unused-vars-experimental': ['error', { ignoredNamesRegex: '^_', ignoreArgsIfArgsAfterAreUsed: false }],
            '@typescript-eslint/no-useless-constructor': ['error'],
            '@typescript-eslint/no-var-requires': ['error'],
            '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
            '@typescript-eslint/prefer-as-const': ['error'],
            '@typescript-eslint/prefer-enum-initializers': ['error'],
            '@typescript-eslint/prefer-function-type': ['error'],
            '@typescript-eslint/prefer-includes': ['error'],
            '@typescript-eslint/prefer-literal-enum-member': ['error'],
            '@typescript-eslint/prefer-namespace-keyword': ['error'],
            '@typescript-eslint/prefer-nullish-coalescing': [
              'error',
              { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }
            ],
            '@typescript-eslint/prefer-optional-chain': ['error'],
            '@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: false }],
            '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
            '@typescript-eslint/prefer-regexp-exec': ['error'],
            '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
            '@typescript-eslint/prefer-ts-expect-error': ['error'],
            '@typescript-eslint/promise-function-async': [
              'error',
              {
                allowAny: true,
                allowedPromiseNames: [],
                checkArrowFunctions: true,
                checkFunctionDeclarations: true,
                checkFunctionExpressions: true,
                checkMethodDeclarations: true
              }
            ],
            '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: false }],
            '@typescript-eslint/require-await': ['error'],
            '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: false }],
            '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
            '@typescript-eslint/return-await': ['error', 'in-try-catch'],
            '@typescript-eslint/strict-boolean-expressions': [
              'error',
              {
                allowString: true,
                allowNumber: true,
                allowNullableObject: true,
                allowNullableBoolean: false,
                allowNullableString: false,
                allowNullableNumber: false,
                allowAny: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
              }
            ],
            '@typescript-eslint/switch-exhaustiveness-check': ['error'],
            '@typescript-eslint/triple-slash-reference': ['error', { lib: 'always', path: 'never', types: 'prefer-import' }],
            '@typescript-eslint/unbound-method': ['error', { ignoreStatic: false }],
            // Stylistic Issues
            '@typescript-eslint/array-type': ['error', { default: 'array' }],
            '@typescript-eslint/ban-tslint-comment': ['error'],
            '@typescript-eslint/brace-style': ['error', '1tbs'],
            '@typescript-eslint/comma-dangle': ['error', 'never'],
            '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
            '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: true }],
            '@typescript-eslint/explicit-function-return-type': [
              'error',
              {
                allowExpressions: false,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: false
              }
            ],
            '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
            '@typescript-eslint/explicit-module-boundary-types': [
              'error',
              {
                allowArgumentsExplicitlyTypedAsAny: false,
                allowDirectConstAssertionInArrowFunctions: true,
                allowedNames: [],
                allowHigherOrderFunctions: true,
                allowTypedFunctionExpressions: true
              }
            ],
            '@typescript-eslint/func-call-spacing': ['error', 'never'],
            '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1, flatTernaryExpressions: false, ignoredNodes: [] }], // DONE
            '@typescript-eslint/keyword-spacing': ['error', {}],
            '@typescript-eslint/lines-between-class-members': [
              'error',
              'always',
              { exceptAfterOverload: true, exceptAfterSingleLine: false }
            ],
            '@typescript-eslint/member-delimiter-style': [
              'error',
              { multiline: { delimiter: 'semi', requireLast: true }, singleline: { delimiter: 'semi', requireLast: false } }
            ],
            '@typescript-eslint/member-ordering': [
              'error',
              {
                default: [
                  'signature',
                  'public-static-field',
                  'protected-static-field',
                  'private-static-field',
                  'public-decorated-field',
                  'protected-decorated-field',
                  'private-decorated-field',
                  'public-instance-field',
                  'protected-instance-field',
                  'private-instance-field',
                  'public-abstract-field',
                  'protected-abstract-field',
                  'private-abstract-field',
                  'public-field',
                  'protected-field',
                  'private-field',
                  'static-field',
                  'instance-field',
                  'abstract-field',
                  'decorated-field',
                  'field',
                  'public-constructor',
                  'protected-constructor',
                  'private-constructor',
                  'constructor',
                  'public-static-method',
                  'protected-static-method',
                  'private-static-method',
                  'public-decorated-method',
                  'protected-decorated-method',
                  'private-decorated-method',
                  'public-instance-method',
                  'protected-instance-method',
                  'private-instance-method',
                  'public-abstract-method',
                  'protected-abstract-method',
                  'private-abstract-method',
                  'public-method',
                  'protected-method',
                  'private-method',
                  'static-method',
                  'instance-method',
                  'abstract-method',
                  'decorated-method',
                  'method'
                ]
              }
            ],
            '@typescript-eslint/no-array-constructor': ['error'],
            '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
            '@typescript-eslint/no-extra-non-null-assertion': ['error'],
            '@typescript-eslint/no-non-null-assertion': ['error'],
            // '@typescript-eslint/no-parameter-properties': ['error', { allows: [] }],
            '@typescript-eslint/no-parameter-properties': ['error'],
            '@typescript-eslint/no-type-alias': [
              'error',
              {
                allowAliases: 'never',
                allowCallbacks: 'never',
                allowConditionalTypes: 'never',
                allowConstructors: 'never',
                allowLiterals: 'never',
                allowMappedTypes: 'never',
                allowTupleTypes: 'never'
              }
            ],
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
              'error',
              { allowComparingNullableBooleansToTrue: true, allowComparingNullableBooleansToFalse: true }
            ],
            '@typescript-eslint/prefer-for-of': ['error'],
            // DONE
            '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: false, avoidEscape: false }],
            // '@typescript-eslint/semi': ['error', 'always', { omitLastInOneLineBlock: false, beforeStatementContinuationChars: 'any' }],
            '@typescript-eslint/semi': ['error'],
            '@typescript-eslint/space-before-function-paren': ['error', 'never'],
            '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
            '@typescript-eslint/type-annotation-spacing': ['error', {}],
            '@typescript-eslint/typedef': [
              'error',
              {
                arrayDestructuring: true,
                arrowParameter: true,
                memberVariableDeclaration: true,
                objectDestructuring: true,
                parameter: true,
                propertyDeclaration: true,
                variableDeclaration: true,
                variableDeclarationIgnoreFunction: true
              }
            ],
            // Variables
            '@typescript-eslint/init-declarations': ['error', 'always'],
            '@typescript-eslint/naming-convention': [
              'error',
              { selector: 'default', format: ['camelCase'], leadingUnderscore: 'allow', trailingUnderscore: 'allow' },
              { selector: 'variable', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow', trailingUnderscore: 'allow' },
              { selector: 'typeLike', format: ['PascalCase'] }
            ],
            '@typescript-eslint/no-shadow': [
              'error',
              {
                allow: [],
                builtinGlobals: false,
                hoist: 'functions',
                ignoreTypeValueShadow: true,
                ignoreFunctionTypeParameterNameValueShadow: true
              }
            ],
            '@typescript-eslint/no-unused-vars': ['error', {}],
            '@typescript-eslint/no-use-before-define': [
              'error',
              { functions: true, classes: true, enums: true, variables: true, typedefs: true, ignoreTypeReferences: true }
            ],
            // This rule will be disable to support `overloads`
            '@typescript-eslint/unified-signatures': 'off',
            // Possible Errors
            '@typescript-eslint/no-dupe-class-members': ['error'],
            '@typescript-eslint/no-extra-parens': ['error', 'all'],
            '@typescript-eslint/no-extra-semi': ['error'],
            '@typescript-eslint/no-loss-of-precision': ['error'],
            '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
            '@typescript-eslint/no-unsafe-assignment': ['error'],
            '@typescript-eslint/no-unsafe-call': ['error'],
            '@typescript-eslint/no-unsafe-member-access': ['error'],
            '@typescript-eslint/no-unsafe-return': ['error'],
            '@typescript-eslint/prefer-readonly-parameter-types': ['error', { checkParameterProperties: true, ignoreInferredTypes: false }]
          }
        }
      ]
    },
    'strict-angular': {
      plugins: ['@angular-eslint', '@angular-eslint/template'],
      overrides: [
        {
          files: ['*.ts'],
          extends: ['plugin:@angular-eslint/all'],
          rules: {
            // Possible Errors
            '@angular-eslint/contextual-lifecycle': ['error'],
            '@angular-eslint/no-attribute-decorator': ['error'],
            // Stylistic Issues
            '@angular-eslint/pipe-prefix': ['error', { prefixes: [] }],
            // Best Practices
            '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component'] }],
            '@angular-eslint/component-max-inline-declarations': ['error', { template: 3, styles: 3, animations: 15 }],
            // TODO: check the error cause the eslint server shut down.
            // '@angular-eslint/component-selector': ['error', { type: '', prefix: '', style: '' }],
            '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
            // TODO: check the error cause the eslint server shut down.
            // '@angular-eslint/directive-selector': ['error', { type: '', prefix: '', style: '' }],
            '@angular-eslint/no-conflicting-lifecycle': ['error'],
            '@angular-eslint/no-forward-ref': ['error'],
            '@angular-eslint/no-host-metadata-property': ['error'],
            '@angular-eslint/no-input-prefix': ['error', { prefixes: [] }],
            '@angular-eslint/no-input-rename': ['error'],
            '@angular-eslint/no-inputs-metadata-property': ['error'],
            '@angular-eslint/no-lifecycle-call': ['error'],
            '@angular-eslint/no-output-native': ['error'],
            '@angular-eslint/no-output-on-prefix': ['error'],
            '@angular-eslint/no-output-rename': ['error'],
            '@angular-eslint/no-outputs-metadata-property': ['error'],
            '@angular-eslint/no-pipe-impure': ['error'],
            '@angular-eslint/no-queries-metadata-property': ['error'],
            '@angular-eslint/no-empty-lifecycle-method': ['error'],
            '@angular-eslint/prefer-on-push-component-change-detection': ['error'],
            '@angular-eslint/prefer-output-readonly': ['error'],
            '@angular-eslint/relative-url-prefix': ['error'],
            '@angular-eslint/use-component-selector': ['error'],
            '@angular-eslint/use-component-view-encapsulation': ['error'],
            '@angular-eslint/use-injectable-provided-in': ['error'],
            '@angular-eslint/use-lifecycle-interface': ['error'],
            '@angular-eslint/use-pipe-decorator': ['error'],
            '@angular-eslint/use-pipe-transform-interface': ['error']
          }
        },
        {
          files: ['*.html'],
          extends: ['plugin:@angular-eslint/template/all'],
          rules: {
            // Best Practices
            '@angular-eslint/template/banana-in-box': ['error'],
            '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 5 }],
            '@angular-eslint/template/no-autofocus': ['error'],
            '@angular-eslint/template/no-call-expression': ['error'],
            '@angular-eslint/template/no-negated-async': ['error'],
            '@angular-eslint/template/no-positive-tabindex': ['error'],
            '@angular-eslint/template/use-track-by-function': ['error'],
            '@angular-eslint/template/accessibility-elements-content': ['error'],
            '@angular-eslint/template/no-distracting-elements': ['error'],
            '@angular-eslint/template/i18n': [
              'error',
              { checkId: true, checkText: true, checkAttributes: true, ignoreAttributes: [''], ignoreTags: [], boundTextAllowedPattern: '' }
            ],
            '@angular-eslint/template/mouse-events-have-key-events': ['error'],
            '@angular-eslint/template/accessibility-valid-aria': ['error'],
            '@angular-eslint/template/accessibility-table-scope': ['error'],
            '@angular-eslint/template/conditional-complexity': ['error', { maxComplexity: 5 }]
          }
        }
      ]
    }
  }
};
