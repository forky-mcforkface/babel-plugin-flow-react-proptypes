const babel = require('babel-core');
const content = `
export interface Pager {
    next(number): void,
    prev(number): void,
    hasNext: boolean,
    hasPrev: boolean,
}
`;

it('interface-export', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;
  expect(res).toMatchSnapshot();
});
