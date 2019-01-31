const babel = require('babel-core');
const content = `
var React = require('react');

type T = {foo: string};;

type U = {bar: string} & T;

class C extends React.Component {
  props: U;
}

export default C;
`;

it('intersection-object-type-literal-type-alias', () => {
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
