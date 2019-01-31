const babel = require('babel-core');
const content = `
type FooProps = {
  a_prop: boolean,
};

export default () => {
  return class extends React.Component {
    props: FooProps;
  }
};
`;

it('hoc-handles-anon-class-return', () => {
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
