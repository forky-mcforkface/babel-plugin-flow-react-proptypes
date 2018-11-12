const babel = require('babel-core');
const content = `
// @flow

import React from 'react';
import type { T } from '../types';

const C = (props: T) => {
  <div>{props.name}</div>
};
`;

it('stateless-inline-imports', () => {
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
