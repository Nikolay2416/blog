import { FC, useEffect } from 'react';

import { PostItem } from '@components/FeaturePostList/PostItem';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { data } from '@store/data';

import cls from './FeaturePostList.module.scss';

interface FeaturePostListProps {
  userId: number | null;
}

export const FeaturePostList: FC<FeaturePostListProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const postListRequest = useAppSelector(data.selectors.getPostListRequest);

  useEffect(() => {
    dispatch(data.actionCreators.fetchPostListWorkerActionCreator(userId));
    return () => {
      dispatch(data.actions.reset());
    };
  }, []);

  return (
    <div className={cls.wrap}>
      {postListRequest.data !== null && postListRequest.data.map((post) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};
