const babel = require('babel-core');
const content = `

// @flow

export default function(
  url: string,
  options: PhenomicStaticConfig,
  Html: Function = DefaultHtml
): Promise<string> {

  return <div/>;
}


`;

it('issue 66', () => {
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
