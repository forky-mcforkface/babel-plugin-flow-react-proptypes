const babel = require('babel-core');
const content = `
const ActionTypes = {
  JUMP_TO: 'react-native/NavigationExperimental/tabs-jumpTo',
};

export type JumpToAction = {
  type: typeof ActionTypes.JUMP_TO,
  index: number,
};
`;

it('typeof', () => {
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
