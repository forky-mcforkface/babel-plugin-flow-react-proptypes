const babel = require('babel-core');
const content = `
import React from 'react';

type Props = {
  requiredAny: any,
  optionalAny?: any,
};

const Foo = (props: Props) => <div />
export default Foo
`;

it('optional-any', () => {
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
