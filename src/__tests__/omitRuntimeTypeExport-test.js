const babel = require('babel-core');
const content = `
// @flow

import React from 'react';

export type T = {
  f: Function,
  i: number,
  x: 'foo' | 'baz',
};

const C = ({
  f,
}: T) => {
   <div></div>
};

export default C;
`;

it('export-type-and-component', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      [require('../'), {omitRuntimeTypeExport: true}]
    ],
  }).code;
  expect(res).toMatchSnapshot();
});
