const babel = require('babel-core');
const content = `
type FooProps = {
  bar: $Exact<{
    a: string,
    b: number,
  }>
};

class Foo extends React.Component {
  props: FooProps;

  render() { return <div /> }
};
`;

it('exact', () => {
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
