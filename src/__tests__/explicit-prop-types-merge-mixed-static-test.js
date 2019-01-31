const babel = require('babel-core');
const content = `
var React = require('react');
var PropTypes = require('prop-types');

type FooProps = {
  a: number,
  b: number,
  c: string,
}

class Foo extends React.Component<FooProps> {
  render() {
    return (
      <div>
        {this.props.a}
        {this.props.b}
        {this.props.c}
        {this.props.d}
      </div>
    );
  }
}

Foo.propTypes = {
  b: PropTypes.string,
  d: PropTypes.string
};

export default Foo;
`;

it('explicit-prop-types-merge-mixed-static', () => {
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
