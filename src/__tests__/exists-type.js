const babel = require('babel-core');
const content = `
type Props = {
  x?: *,
  y: *,
};
class Foo extends React.Component {
  props: Props;

  render() { return <div /> }
};
`;

it('existsType', () => {
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
