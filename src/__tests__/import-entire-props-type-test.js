const babel = require('babel-core');
const content = `
var React = require('react');
import type { Props } from './file1';

type State = {};

class MyComponent extends React.Component<Props, State> {}
`;

it('import-entire-props-type', () => {
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
