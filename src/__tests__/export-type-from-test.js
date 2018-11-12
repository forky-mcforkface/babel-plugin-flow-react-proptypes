const babel = require('babel-core');
const content = `
export type { Foo, Bar } from './types';
`;

it('export-type-from', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;

  // expect(res).toMatch(/exports\..*Foo.*Foo/);
  expect(res).toMatch(/exports,\s+\".*Foo/);
  expect(res).toMatch(/exports,\s+\".*Bar/);
  expect(res).toMatchSnapshot();
});

it('export-type-from-esm', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: [['@babel/env', {modules: false}], '@babel/react', '@babel/flow'],
    plugins: [
      '@babel/syntax-flow',
      require('../'),
      "@babel/plugin-proposal-class-properties"
    ],
  }).code;
  expect(res).toMatch(/import.*Foo.*types/);
  expect(res).toMatch(/import.*Bar.*types/);
  expect(res).toMatch(/export.*Foo/);
  expect(res).toMatch(/export.*Bar/);
  expect(res).toMatchSnapshot();
});
