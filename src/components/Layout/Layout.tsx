import { Container } from './Layout.styled';
import { Suspense } from 'react';
import Appbar from 'components/AppBar';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function Layout() {
  return (
    <Container>
      <Appbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}
