import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import grid from '../node_modules/bootstrap/scss/bootstrap-grid.scss';

const HomePage = () => (
  <Container title="Homepage">
    <Header />
    <Content className={grid.container}>
      <Jumbotron />
    </Content>
  </Container>
);

export default HomePage;
