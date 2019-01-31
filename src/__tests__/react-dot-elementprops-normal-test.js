const babel = require('babel-core');
const content = `
const React = require('react');
const MenuItem = require('./MenuItem');

type Props = {
  foo: React.ElementProps<typeof MenuItem>,
};
const C = (props: Props) => <div />;
`;

it('react-dot-elementprops-normal', () => {
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
