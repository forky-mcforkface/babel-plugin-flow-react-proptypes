const babel = require('babel-core');
const content = `
// @flow
import type { Job } from 'JLCommon';
export type JobViewImpression = Job & {
    resultId?: string,
    listIndex: number,
    searchType: ?string,
    viewSource: ?string,
};
`;

it('real3', () => {
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
