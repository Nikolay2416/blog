import { FC } from 'react';

import { FeaturePostList } from '@components/FeaturePostList';

export const PostsPage: FC = () => {
  return (
    <>
      <h2>Список всех постов</h2>
      <FeaturePostList userId={null} />
    </>
  );
};
