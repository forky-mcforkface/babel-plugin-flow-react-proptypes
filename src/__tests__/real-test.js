const babel = require('babel-core');
const content = `
import React, {PropTypes} from 'react';

type AlbumCardProps = {
  data: {
    stats: {
      images: number,
      videos: number,
      reposts: number,
      shares: number,
      stashes: number,
      likes: number,
      comments: number
    },
    title: string,
    coverImage: {
      id: string,
      src: string
    },
    description: string,
    userIsFollowing: true | false,
  }
}

export default
class AlbumCard extends React.Component {
  props: AlbumCardProps;

  render() {
    return (
      <Box>

      </Box>
    );
  }
}
`;

it('real', () => {
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
