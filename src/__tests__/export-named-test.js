const babel = require('babel-core');
const content = `
// @flow
import React from 'react'
type VendorProps = {
  test: string,
};

export class ExportedVendorCard extends React.Component {
  props: VendorProps;
  render () {
    return (
      <div />
    );
  }
}

class LocalVendorCard extends React.Component {
  props: VendorProps;
  render () {
    return (
      <div />
    );
  }
}
`;

it('export-named', () => {
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
