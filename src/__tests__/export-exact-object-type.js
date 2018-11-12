const babel = require('babel-core');
const content = `
// @flow
import React from 'react'
export type VendorProps = {|
  test: string,
|};
`;

it('export-exact-object-type', () => {
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
