import { FC } from 'react';
import { Router } from '@router/router';

import { Spinner } from '@components/Spinner';
import { Header } from '@components/Header';

import { useErrorView } from '@hooks/useErrorView';

import cls from './App.module.scss';

export const App: FC = () => {
  useErrorView();
  return (
    <>
      <Spinner />
      <Header />
      <div className={cls.wrap}>
        <Router />
      </div>
    </>
  );
};
