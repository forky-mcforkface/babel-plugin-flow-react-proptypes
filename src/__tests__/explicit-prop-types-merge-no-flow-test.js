const babel = require('babel-core');
const content = `
var React = require('react');
var PropTypes = require('prop-types');

const Foo = props => {
  return (
    <div>
      {props.b}
      {props.d}
    </div>
  );
};

Foo.propTypes = {
  b: PropTypes.string,
  d: PropTypes.string
};

export default Foo;
`;

it('explicit-prop-types-merge-no-flow-test', () => {
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
