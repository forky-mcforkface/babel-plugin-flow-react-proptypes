const babel = require('babel-core');
const content = `
var React = require('react');

type T = {
  an_optional_string?: string,
  tupletype: [string, Object]
}

export default function Foo(props: T) {
    <div />
}
`;

it('tupletype', () => {
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
