const babel = require('babel-core');
const content = `
import * as React from 'react'

type Props = {
  children: React.Node
}

export const MyComponent = class extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
`;

it('class-with-no-name', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;
  expect(res).toMatch(/node.isRequired/);
  expect(res).toMatchSnapshot();
});
