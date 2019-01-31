const babel = require('babel-core');
const content = `
var React = require('react');

export type U = {bar: string} & {foo: string};

class C extends React.Component {
  props: U;
}

export default C;
`;

it('interesection-two-object-type-literals', () => {
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
