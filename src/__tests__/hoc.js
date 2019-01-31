const babel = require('babel-core');
const content = `
type FooProps = {
  a_prop: boolean,
};

export default () => {
  class C extends React.Component {
    props: FooProps;
  }
  return C;
};
`;

it('import-object', () => {
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
