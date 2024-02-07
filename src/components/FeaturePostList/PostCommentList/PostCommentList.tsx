import { FC, useEffect } from 'react';
import Card from 'react-bootstrap/esm/Card';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { data } from '@store/data';

import cls from './PostCommentList.module.scss';

interface PostCommentListProps {
  postId: number;
}

export const PostCommentList: FC<PostCommentListProps> = ({ postId }) => {
  const dispatch = useAppDispatch();

  const postCommentList = useAppSelector(data.selectors.getPostCommentList(postId));

  useEffect(() => {
    dispatch(data.actionCreators.fetchCommentListWorkerActionCreator(postId));

    return () => {
      dispatch(data.actions.clearPostCommentList({ postId }));
    };
  }, []);

  return (
    <div className={cls.wrap}>
      {postCommentList &&
        postCommentList.map((comment) => (
          <Card key={comment.id}>
            <Card.Body>
              <Card.Text>
                (postId={comment.postId}, commentId={comment.id})
              </Card.Text>
              <Card.Link>{comment.email}</Card.Link>
              <Card.Text>{comment.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};
