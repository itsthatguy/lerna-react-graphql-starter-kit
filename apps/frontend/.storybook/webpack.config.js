const path = require('path');
const SRC = path.resolve(__dirname, '..', 'src');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  });
  config.resolve.modules.push(SRC);
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
