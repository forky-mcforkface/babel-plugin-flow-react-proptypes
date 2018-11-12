const babel = require('babel-core');
const content = `

class MyComponent extends React.Component {
  props: {
    foo: string
  } & {
    bar: number
  };
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
