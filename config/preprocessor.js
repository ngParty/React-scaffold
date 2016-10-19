const tsc = require('typescript');

const { compilerOptions } = require( '../tsconfig.json' );
const { options } = tsc.convertCompilerOptionsFromJson( compilerOptions );

module.exports = {
  process(src, filename) {
    if (filename.endsWith('.ts') || filename.endsWith('.tsx')) {
      // compile by tsconfig
      return tsc.transpile(
        src,
        options,
        filename,
        []
      );
    }
    return src;
  },
};
