import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import grid from '../node_modules/bootstrap/scss/bootstrap-grid.scss';

const HomePage = () => (
  <Container title="Homepage">
    <Header />
    <Content className={grid.container}>Hello</Content>
  </Container>
);

export default HomePage;
