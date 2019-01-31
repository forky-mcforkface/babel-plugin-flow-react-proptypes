const babel = require('babel-core');
const content = `
import React from 'react';

type Props = {
  xs: Array,
  ys?: Array,
};

export default
class ArrayTest extends React.Component<Props> {
}
`;

it('array', () => {
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
