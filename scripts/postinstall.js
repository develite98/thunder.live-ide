// @ts-check
const colors = require('ansi-colors');

// Show successful message.
console.log(`
${colors.green('All dependencies are installed! This repo no longer automatically run builds when installing dependencies.')}
For inner loop development, run these commands:
  ${colors.yellow('You can start the playground app using:')}
  ${colors.yellow('yarn dev')}
`);
