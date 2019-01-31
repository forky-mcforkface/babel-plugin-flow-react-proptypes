const babel = require('babel-core');
const content = `
import React from 'react';

type Props = {
  foo: $ReadOnlyArray<number>,
};

class ReadOnlyArrayTest extends React.Component<Props> {}
`;

it('generic-array', () => {
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
