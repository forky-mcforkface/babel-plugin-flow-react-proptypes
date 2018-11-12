const babel = require('babel-core');
const content = `
type FooProps = {
  name: string
};

class Foo extends React.PureComponent {
  props: FooProps;
  render() {
    return <div />;
  }
}
`;

it('pure-component', () => {
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
