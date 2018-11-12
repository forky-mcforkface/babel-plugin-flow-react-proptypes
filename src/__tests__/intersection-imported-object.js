const babel = require('babel-core');
const content = `
import type {NamedType} from './foo';

type FooProps = NamedType & {
  foo: string,
  bar: number,
};

class C extends React.Component {
    props: FooProps
}
`;

it('intersection-with-imported-object', () => {
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
