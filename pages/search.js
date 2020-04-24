import React from 'react';
import Container from '../components/Container/Container';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import grid from '../node_modules/bootstrap/scss/bootstrap-grid.scss';

const SearchMoviePage = () => (
  <Container title="Search Movie">
    <Header />

    <Content className={grid.container}>
      <Search />
    </Content>
  </Container>
);
export default SearchMoviePage;
