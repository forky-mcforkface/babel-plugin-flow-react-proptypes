const babel = require('babel-core');
const content = `
var React = require('react');

type T = {
  bar: string,
}

type U = {
  foo: string,
}

export type V = U & T;


class C extends React.Component {
  props: V;
}

export default C;
`;

it('export-intersection-type', () => {
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
