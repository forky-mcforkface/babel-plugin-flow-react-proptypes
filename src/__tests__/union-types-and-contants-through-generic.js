const babel = require('babel-core');
const content = `
var React = require('react');



type Generic<U> = U | 'bar' | number;

type FooProps = {
  id: Generic<'foo'>,
};



class Foo extends React.Component {
  props: FooProps;
}

export default C;
`;

it('union-types-and-constants-through-generic', () => {
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
