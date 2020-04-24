import React from 'react';
import Link from 'next/link';
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
      <p>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        Do you want to search other movies?{' '}
        <Link href="/search">
          {/* stylelint-disable-next-line scale-unlimited/declaration-strict-value */}
          <a style={{ color: '#fff' }} href="/search">
            Go for it!
          </a>
        </Link>
      </p>
    </Content>
  </Container>
);

export default HomePage;
