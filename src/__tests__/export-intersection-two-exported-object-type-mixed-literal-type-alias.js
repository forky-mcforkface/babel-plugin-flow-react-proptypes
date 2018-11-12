const babel = require('babel-core');


const content = `
var React = require('react');

export type T = {
  bar: string,
}

export type U = T & {
  foo: string,
};


class C extends React.Component {
  props: U;
}

export default C;
`;

it('exported-intersection-exported-type-alias-unexported-object-literal', () => {
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
