import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {U16To32Listener} = require(path.join(base, rel,
  'U16To32Listener'));

export class Translator extends U16To32Listener {
  enterExpr () {
    process.stdout.write('hello');
  }

  exitExpr () {
    process.stdout.write('bye');
  }
}
