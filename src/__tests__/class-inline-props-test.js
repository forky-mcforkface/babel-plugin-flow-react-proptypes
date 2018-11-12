const babel = require('babel-core');
const content = `
// @flow
var React = require('react');
import type { ExternalType } from '../types';

export default class Foo extends React.Component {
  props: {
    a_number: number,
    external: ExternalType,
    externalOptional?: ExternalType,
  }

  render () {
    return <div />
  }
}
`;

it('class-inline-props', () => {
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
