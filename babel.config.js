module.exports = function (api) {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
    ['styled-components', { ssr: true }],
    ['import', { libraryName: 'antd', style: 'css' }],
  ];

  return {
    presets,
    plugins,
  };
};
