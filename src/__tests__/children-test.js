const babel = require('babel-core');
const content = `
const React = require('react');
const Element = React.Element;

type FooProps = {
  children: React.Element[],
  children2: Element[],
  children3: Element<*>,
  children4: Element<any>,
};

function Foo(props: FooProps) {
    <div>{props.children}</div>
}
`;

it('children', () => {
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
