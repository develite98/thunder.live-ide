const fs = require('fs');
const path = require('path');
const appsDir = path.join(process.cwd(), 'apps');
const libsDir = path.join(process.cwd(), 'libs');

module.exports = {
  types: [
    { value: 'build', name: 'build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)' },
    { value: 'ci', name: 'ci: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)' },
    { value: 'docs', name: 'docs: Documentation only changes' },
    { value: 'feat', name: 'feat: A new feature' },
    { value: 'fix', name: 'fix: A bug fix' },
    { value: 'perf', name: 'perf: A code change that improves performance' },
    { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'test', name: 'test: Adding missing tests or correcting existing tests' }
  ],

  scopes: [
    ...fs.readdirSync(appsDir).map(p => ({ name: p, value: p })),
    ...fs.readdirSync(libsDir).map(p => ({ name: p, value: p })),
    {
      name: 'repo',
      description: 'anything related to managing the repo itself'
    },
    { name: 'release', description: 'anything related to release process' }
  ],

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE (lowercase) description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  // Skip any questions you want
  skipQuestions: ['ticketNumber'],
  subjectLimit: 100,
  // It is supported for fields body and footer.
  breaklineChar: '|',
  footerPrefix: 'ISSUES CLOSED:',
  askForBreakingChangeFirst: true // default is false
};
