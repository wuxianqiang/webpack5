
const ConcatSource = require('webpack-sources').ConcatSource;
class CustomPlugin {
  constructor(options) {
      // ...
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('CustomPlugin', (compilation) => {
      compilation.hooks.optimizeChunkAssets.tap('CustomPlugin', (chunks) => {
        chunks.forEach((chunk) => {
          chunk.files.forEach((fileName) => {
            if (fileName === 'bundle.js') {
              const asset = compilation.assets[fileName]
              let input = asset.source()
              let newInput = input.replace('// mpx-e2e-outlet', `import('./a.js')`)
              // compilation.assets['app-e2e.js'] = compilation.assets[fileName]
              compilation.assets['bundle2.js'] = {
                source: () => newInput,
                size: () => newInput.length
              }
            }
          });
        });
      });
    });
  }
}



module.exports = CustomPlugin
