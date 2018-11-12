const babel = require('babel-core');
const content = `
import SomeClass from './some_class';
class SomeOtherClass {

}

class MyComponent extends React.Component {
    props: {
      some_class: SomeClass,
      some_other_class: SomeOtherClass,
      key_can_be_omitted?: SomeClass,
      value_can_be_null: ?SomeOtherClass,
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
