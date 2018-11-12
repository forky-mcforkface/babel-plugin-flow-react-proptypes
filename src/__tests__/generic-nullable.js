const babel = require('babel-core');
const content = `
import React from 'react';

type Generic<T> = ?T;
type Props = {
  foo: Generic<number>,
};

export default
class ArrayTest extends React.Component<Props> {
}
`;

it('generic-nullable', () => {
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
