const babel = require('babel-core');
const content = `
var React = require('react');

import type T from './T';

export type U = T & {
  foo: string,
};

type V = {
  baz: string,
};

class C extends React.Component {
  props: U;
}

export default C;
`;

it('interesection-export', () => {
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
