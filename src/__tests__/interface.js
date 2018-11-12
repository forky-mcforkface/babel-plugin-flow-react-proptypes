const babel = require('babel-core');
const content = `
type ObjType = {
    next: null,
};

interface Pager {
    next(number): void,
    prev(number): void,
    hasNext: boolean,
    hasPrev: boolean,
}

type FooProps = {
    pager: Pager,
};

class C extends React.Component {
    props: FooProps
}
`;

it('import-object', () => {
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
