const babel = require('babel-core');
const content = `

import type {NamedType} from "./types";

export type ExportedType = {
  bar: number,
};

class MyComponent extends React.Component {
  props: {
    foo: string,
    baz: NamedType,
  } & ExportedType;
}
`;

it('intersection inline with exported and nested imported type', () => {
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
