const babel = require('babel-core');
const content = `
type Props = {
  name: string,
}

var C = (props: Props) => {
  var el = null;
  if (true) {
    el = <div />;
  }
  return el;
};
`;

it('indirect-jsx', () => {
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
