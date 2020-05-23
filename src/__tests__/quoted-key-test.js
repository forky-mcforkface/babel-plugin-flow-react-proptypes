const babel = require('babel-core');
const content = `
var React = require('react');

type Props = {|
  unquoted: string,
	'data-cy': string,
|};

function Comp(props: Props) {
  return <div />;
}
`;

it('quoted-key', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;

  expect(res).toMatch(/['"]unquoted['"]/);
  expect(res).toMatch(/['"]data-cy['"]/);
  expect(res).toMatchSnapshot();

});