module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin' // ADVERTENCIA: Este plugin siempre debe ser el último de la lista
    ],
  };
};