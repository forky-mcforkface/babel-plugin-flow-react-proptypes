const babel = require('babel-core');
const content = `
/* @flow */

const NotComponent = (x: number, y: number): number => {
  return x + y;
};

`;

it('function-types', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;
  expect(res.indexOf('prop-types')).toBe(-1);
  expect(res).toMatchSnapshot();
});
