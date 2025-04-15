const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@react-navigation']
    }
  }, argv);

  // Add a fallback for the 'react-native' module
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
    'react-native-linear-gradient': 'react-native-web-linear-gradient'
  };

  return config;
};
