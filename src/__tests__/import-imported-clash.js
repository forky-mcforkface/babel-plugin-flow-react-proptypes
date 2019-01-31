const babel = require('babel-core');
const content = `
import type {Foo} from './foo';
import type {Foo as Bar} from './bar';

type Props = {
  foo: Foo,
  bar: Bar,
};

class C extends React.Component {
    props: Props
};
`;

it('import-imported-clash', () => {
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
