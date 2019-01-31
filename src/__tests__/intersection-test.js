const babel = require('babel-core');
const content = `
type Props = {
    someProp: {} & {}
};
class MyComponent extends React.Component {
    props: Props;
}
`;

it('intersection', () => {
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
