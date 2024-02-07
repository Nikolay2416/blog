import { useEffect } from 'react';

import { useAppSelector } from '@store/hooks';
import { data } from '@store/data';

export const useErrorView = () => {
  const postListRequest = useAppSelector(data.selectors.getPostListRequest);
  const userRequest = useAppSelector(data.selectors.getUserRequest);

  const postCommentRequest = useAppSelector(data.selectors.getPostCommentRequest);

  useEffect(() => {
    if (postListRequest.error) {
      alert('Ошибка получения постов: ' + JSON.stringify(postListRequest.error, null, 2));
    }
  }, [postListRequest.error]);

  useEffect(() => {
    if (postListRequest.error) {
      alert('Ошибка получения сведений о пользователе: ' + JSON.stringify(userRequest.error, null, 2));
    }
  }, [userRequest.error]);

  useEffect(() => {
    if (postCommentRequest.error) {
      alert('Ошибка получения комментариев: ' + JSON.stringify(postCommentRequest.error, null, 2));
    }
  }, [postCommentRequest.error]);
};
