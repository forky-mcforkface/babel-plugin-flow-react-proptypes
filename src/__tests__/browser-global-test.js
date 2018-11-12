const babel = require('babel-core');
const content = `
const Element = window.Element;

type FooProps = {
  element: Element,
}

class Foo extends React.Component {
  props: FooProps;

  render() { return null; }
}

`;

it('global element', () => {
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
