const babel = require('babel-core');
const content = `
var React = require('react');
import { type Foo } from './other_module';

type Props = {|
  id: string,
  ...Foo,
|}
`;

it('imported-spread', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;

  // The type shouldn't show up as we don't support
  // spreads from imports
  expect(res).not.toMatch(/Foo/);

  expect(res).toMatchSnapshot();
});
