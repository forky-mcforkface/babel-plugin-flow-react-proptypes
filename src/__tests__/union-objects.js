const babel = require('babel-core');
const content = `
var React = require('react');


type U = {
  a: string
};
type V = {
  b: number
};

type FooProps = {
  union: U | V,
};


class Foo extends React.Component {
  props: FooProps;
}

export default C;
`;

it('union-objects', () => {
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
