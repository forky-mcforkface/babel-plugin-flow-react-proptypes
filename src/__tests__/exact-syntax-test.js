const babel = require('babel-core');
const content = `
type FooProps = {
  bar: {|
    a: string,
    b: number,
  |}
};

class Foo extends React.Component {
  props: FooProps;

  render() { return <div /> }
};
`;

it('exact-syntax', () => {
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
