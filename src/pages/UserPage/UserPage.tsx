import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/esm/Card';
import { Button } from 'react-bootstrap';

import { FeaturePostList } from '@components/FeaturePostList';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { data } from '@store/data';
import { appSlice } from '@store/app';
import { getRoutePath } from '@router/helpers';

import cls from './UserPage.module.scss';

export const UserPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const userRequest = useAppSelector(data.selectors.getUserRequest);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(data.actionCreators.fetchUserWorkerActionCreator(Number.parseInt(id)));
    }
    return () => {
      dispatch(data.actions.reset());
    };
  }, []);

  const handleBack = () => {
    dispatch(appSlice.actions.redirect(getRoutePath('posts')));
  };

  return (
    <div className={cls.wrap}>
      <div>
        <Button onClick={handleBack}>Назад</Button>
      </div>

      <h2>Сведения о пользователе</h2>
      {userRequest.data && (
        <Card>
          <Card.Header>userId: {userRequest.data.id}</Card.Header>
          <Card.Header>Имя: {userRequest.data.name}</Card.Header>
          <Card.Header>Ник: {userRequest.data.username}</Card.Header>
          <Card.Header>Почта: {userRequest.data.email}</Card.Header>
          <Card.Header>Телефон: {userRequest.data.phone}</Card.Header>
        </Card>
      )}
      <h2>Посты пользователя</h2>
      {id && <FeaturePostList userId={Number.parseInt(id)} />}
    </div>
  );
};
