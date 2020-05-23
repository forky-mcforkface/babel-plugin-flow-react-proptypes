const babel = require('babel-core');
const content = `
// @flow
import type { Node } from 'react';

type Props = {
  foo: Node,
}

const C = (props: Props) => <div />;
`;

it('import-named-react-node', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;
  expect(res).toMatch(/_propTypes\[['"]default['"]]\.node\.isRequired/);
  expect(res).toMatchSnapshot();
});

it('import-named-react-node esm', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: [['@babel/env', { modules: false }], '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;
  expect(res).toMatch(/PropTypes\.node\.isRequired/);
  expect(res).toMatchSnapshot();
});
