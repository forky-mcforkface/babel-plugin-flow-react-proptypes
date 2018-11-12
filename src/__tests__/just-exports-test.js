const babel = require('babel-core');
const content = `
export appcache from "./validators/appcache.js"
export assets from "./validators/assets.js"
export baseUrl from "./validators/baseUrl.js"
export production from "./validators/production.js"
`;

it('just-exports', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      // "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
    ],
  }).code;
  expect(res).toMatchSnapshot();
});
