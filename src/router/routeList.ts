import { FC } from 'react';

import { Page404 } from '@pages/Error404Page';
import { PostsPage } from '@pages/PostsPage';
import { AboutPage } from '@pages/AboutPage';
import { UserPage } from '@pages/UserPage';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = ['posts', 'userPage', 'about', 'error404'] as const;

export type RouteNameList = (typeof routeNameList)[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  posts: {
    path: '/posts',
    component: PostsPage,
  },
  userPage: { path: '/user/:id', component: UserPage },
  about: { path: '/about', component: AboutPage },
  error404: {
    path: '*',
    component: Page404,
  },
};
