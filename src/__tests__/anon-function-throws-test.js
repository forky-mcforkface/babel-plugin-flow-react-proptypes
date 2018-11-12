const babel = require('babel-core');
const content = `
type Props = {
  x: string,
};
export default function(props: Props) {
  return <div />;
}
`;

it('anon-function-throws', () => {
  expect(() => {
    babel.transform(content, {
      babelrc: false,
      presets: ['@babel/env', '@babel/react', '@babel/flow'],
      plugins: [
        '@babel/syntax-flow',
        require('../'),
        "@babel/plugin-proposal-class-properties"
      ],
    });
  }).toThrow(/with no name/);
});
