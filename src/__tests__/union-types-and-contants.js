const babel = require('babel-core');
const content = `
var React = require('react');



export type U = 'foo' | 'bar' | number;

type FooProps = {
  id: 'foo' | 'bar' | number
};



class Foo extends React.Component {
  props: FooProps;
}

export default C;
`;

it('union-types-and-constants', () => {
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
