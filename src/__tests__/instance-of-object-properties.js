const babel = require('babel-core');
const content = `

export type Fact = Foo.Bar;
export type FactMap = Foo.Map<string, string>;

import {SomeClass} from './some_class';

class MyComponent extends React.Component {
    props: {
      some_class: SomeClass.property,
      generics: SomeClass.Map<string, string>,
      deep: SomeClass.deeper.nesting.Bar,
    }
}
`;

it('instance-of', () => {
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
