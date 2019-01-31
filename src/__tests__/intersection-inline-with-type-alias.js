const babel = require('babel-core');
const content = `

type Bar = {
  bar: number
};

class MyComponent extends React.Component {
  props: {
    foo: string
  } & Bar;
}
`;

it('intersection inline without type alias', () => {
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
