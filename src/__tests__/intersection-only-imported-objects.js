const babel = require('babel-core');
const content = `
import type {NamedType} from './foo';
import type {SomeOtherType} from './bar';

type FooProps = NamedType & SomeOtherType;

class C extends React.Component {
    props: FooProps
}
`;

it('intersection-with-only-imported-objects', () => {
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
