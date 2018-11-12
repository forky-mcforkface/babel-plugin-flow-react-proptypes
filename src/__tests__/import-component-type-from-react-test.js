const babel = require('babel-core');
const content = `
import React from 'react';
import type { ComponentType } from 'react';

type Props = {
    component?: string | ComponentType<*>,
}

class C extends React.Component<any, Props> {
}

`;

it('import-component-type-from-react', () => {
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
