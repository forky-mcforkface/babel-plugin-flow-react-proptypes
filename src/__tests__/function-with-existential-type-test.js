// http://sitr.us/2015/05/31/advanced-features-in-flow.html#existential-types
const babel = require('babel-core');
const content = `
type FooProps = {
  bar: *
}

const C = (props: FooProps) : ReactElement => {
}
`;

it('function-with-type-annotation', () => {
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
