const babel = require('babel-core');
const content = `
var React = require('react');

type Maybe<T> = T | void;

type Props = {
  foo: Maybe<string>,
};

function C(props: Props) {
  return <div>{props.foo}</div>;
}
`;

it('union-void-through-generic', () => {
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
