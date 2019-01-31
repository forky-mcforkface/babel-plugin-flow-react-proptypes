const babel = require('babel-core');
const content = `
var React = require('react');

export default class Foo extends React.Component<{a_number: number}> {
}
`;

it('inline-type-param-158', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;
  expect(res).toMatch(/propTypes/);
  expect(res).toMatchSnapshot();
});
