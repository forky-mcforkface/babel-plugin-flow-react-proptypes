const babel = require('babel-core');
const content = `
var React = require('react');

export default function Foo({x=1, y='foo'}: {
  x?: number,
  y?: string
}) {
  <div>{x}/{y}</div>
}
`;

it('stateless-inline-defaults', () => {
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
