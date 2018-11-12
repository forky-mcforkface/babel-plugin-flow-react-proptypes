const babel = require('babel-core');

const content = `
var React = require('react');

import type {NamedType, OtherNamedType, ThirdNamedType} from "./types";

class D extends React.Component {
   props: NamedType & {
    foo: number,
    bar: NamedType,
    baz: NamedType & OtherNamedType & {
      foo: "number", bar: NamedType & OtherNamedType
    } & ThirdNamedType,
  };
};

export default D;
`;

it('intersection-exported-type-alias-unexported-object-literal', () => {
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
