const babel = require('babel-core');
const content = `
import React, {Component, PropTypes} from 'react';

type TaskGridHeaderProps = {
    tasksSetSort: any
};

export default class TaskGridHeader extends Component {
    props: TaskGridHeaderProps;

    render() {
        return null;
    }
}

const glyph = (param?: any) => (
    <div/>
);
`;

it('class-and-function', () => {
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
