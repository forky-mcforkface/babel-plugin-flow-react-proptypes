const babel = require('babel-core');
const content = `
var React = require('react');

type Props = { x: string };

class C extends React.Component<Props> {
  render(){ return null }
}
`;

it('use-static-rn', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [[require('../'), { useStatic: true }]],
    compact: false,
  }).code;
  expect(res).toMatch(/C\.propTypes/g);
  expect(res).toMatchSnapshot();
});
