const babel = require('babel-core');
const content = `
import React from 'react';

type Props = {
  foo: React.Node,
};

class MyComponent extends React.Component<Props, State> {}
`;

it('react-node', () => {
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
