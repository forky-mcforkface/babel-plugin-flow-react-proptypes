const babel = require('babel-core');
const content = `
/* @flow */

import React, { Element, Component } from "react"

type Props = {
  onClick?: () => void,
}

class MyComponent extends Component<Props, void, void> {
}

export default MyComponent;
`;

it('function-types', () => {
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
