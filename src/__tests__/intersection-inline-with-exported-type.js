const babel = require('babel-core');
const content = `

export type ExportedType = {
  bar: number,
};

class MyComponent extends React.Component {
  props: {
    foo: string
  } & ExportedType;
}
`;

it('intersection inline with exported type', () => {
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
