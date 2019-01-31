const babel = require('babel-core');
const content = `
var React = require('react');

type Complex = {
  real: number;
  imag: number;
}
type FooProps = {
  oneNumber: number;
  oneComplex: Complex;
  manyNumbers: {[name: string]: number},
  manyComplex: {[name: string]: Complex},
}

export default class Foo extends React.Component {
  props: FooProps
}
`;

it('objectOf', () => {
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
