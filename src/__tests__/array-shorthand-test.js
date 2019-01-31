const babel = require('babel-core');
const content = `
type CProps = {
  as: string[]
}

export default class C extends React.Component {
  props: CProps;
  render() {
    return <div />;
  }
}
`;

it('array-shorthand', () => {
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
