/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import grid from '../../node_modules/bootstrap/scss/bootstrap-grid.scss';
import MovieCard from '../MovieCard/MovieCard';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: [],
    };
  }

  async componentDidMount() {
    const url = 'https://www.omdbapi.com/?apikey=7b3dc42b&s=harry-potter';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ items: data.Search, loading: false });
  }

  render() {
    const { loading, items } = this.state;

    if (loading) {
      return <div>loading...</div>;
    }

    if (!items) {
      return <div>Didn&apos;t get a movie</div>;
    }

    return (
      <div>
        <h1>Have you seen this movies before?</h1>

        <div className={grid.row}>
          {items.map((item) => (
            <MovieCard
              key={item.imdbID}
              id={item.imdbID}
              posterUrl={item.Poster}
              posterAlt={item.Title}
              title={item.Title}
              year={item.Year}
              type={item.Type}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Jumbotron;
