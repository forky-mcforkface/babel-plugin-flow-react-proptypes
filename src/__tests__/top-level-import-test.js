const babel = require('babel-core');
const content = `
import React, { Component } from 'react';
import type { Data } from 'types';

class Test extends Component {
  props: Data;

  render() {
    return (
      <div>{this.props.id} {this.props.title}</div>
    );
  }
}

export default Test;
`;

it('basic', () => {
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
