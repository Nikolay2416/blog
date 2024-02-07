import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { PostCommentList } from '@components/FeaturePostList/PostCommentList';

import { getRoutePath } from '@router/helpers';

import { Post } from '@interface/Posts';

import avatarImg from '@assets/avatar.png';
import cls from './PostItem.module.scss';

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const [isCommentListShow, setIsCommentListShow] = useState(false);

  return (
    <Card>
      <Link to={getRoutePath('userPage', post.userId.toString())} className={cls.link}>
        <Card.Img src={avatarImg} className={cls.avatar} />
      </Link>
      <Card.Body>
        <Card.Text>
          (postId={post.id}, userId={post.userId})
        </Card.Text>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>

        <Card.Text>
          <Button onClick={() => setIsCommentListShow((prev) => !prev)}>
            {isCommentListShow ? 'Скрыть комментарии' : 'Показать комментарии'}
          </Button>
        </Card.Text>
        {isCommentListShow && <PostCommentList postId={post.id} />}
      </Card.Body>
    </Card>
  );
};
