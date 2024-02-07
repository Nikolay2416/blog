import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { Card, Nav, Navbar } from 'react-bootstrap';

import { getRoutePath } from '@router/helpers';

import avatarImg from '@assets/avatar.png';
import cls from './Header.module.scss';

export const Header: FC = () => {
  const navigate = useNavigate();
  const goTo = (path: string) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <Navbar collapseOnSelect expand={false} bg="dark" variant="dark" className={cls.wrap} fixed={'top'}>
      <Navbar.Brand>Blog-N</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className={cls.NavbarCollapse}>
        <Card className={cls.avatar}>
          <Card.Img src={avatarImg} />
          <Card.Text>User 1</Card.Text>
          <Card.Link>user@mail.ru</Card.Link>
        </Card>
        <Nav className={`mr-auto ${cls.nav}`}>
          <Nav.Link href={getRoutePath('posts')} onClick={goTo(getRoutePath('posts'))}>
            СПИСОК ПОСТОВ
          </Nav.Link>
          <Nav.Link href={getRoutePath('about')} onClick={goTo(getRoutePath('about'))}>
            ПОЛЬЗОВАТЕЛЬ
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
