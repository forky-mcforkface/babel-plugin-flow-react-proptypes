const babel = require('babel-core');
const content = `
var React = require('react');

type FooProps = {
  a_number: number,
}

export default class Foo extends React.Component<FooProps> {
}
`;

it('class-single-type-test', () => {
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
