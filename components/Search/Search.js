/* eslint-disable no-restricted-globals */
import React from 'react';
import axios from 'axios';
import PageNavigation from '../PageNavigation/PageNavigation';
import MovieCard from '../MovieCard/MovieCard';
import css from './Search.scss';
import grid from '../../node_modules/bootstrap/scss/bootstrap-grid.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
      // eslint-disable-next-line react/no-unused-state
      totalAllResults: 0,
      totalPages: 0,
      currentPageNo: 0,
    };

    this.cancel = '';
  }

  /**
   * Get the Total Pages count.
   *
   * @param total
   * @param denominator Count of results per page
   * @return {number}
   */
  getPageCount = (totalResults, denominator) => {
    const divisible = totalResults % denominator === 0;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(totalResults / denominator) + valueToBeAdded;
  };

  /**
   * Fetch the search results and update the state with the result.
   * Also cancels the previous query before making the new one.
   *
   * @param {int} updatedPageNo Updated Page No.
   * @param {String} query Search Query.
   *
   */
  fetchSearchResults = (updatedPageNo = '', query) => {
    const movieYear = `&y=${query}`;
    const page = updatedPageNo ? `&page=${updatedPageNo}` : '';
    const searchUrl = `http://www.omdbapi.com/?apikey=7b3dc42b&s=${query}${movieYear}${page}`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const { totalResults } = res.data;
        const totalPagesCount = this.getPageCount(totalResults, 10);
        const resultNotFoundMsg = !res.data.Search.length
          ? 'There are no more search results. Please try a new search'
          : '';
        this.setState({
          results: res.data.Search,
          message: resultNotFoundMsg,
          // eslint-disable-next-line react/no-unused-state
          totalAllResults: totalResults,
          totalPages: totalPagesCount,
          currentPageNo: updatedPageNo,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: 'Failed to fetch the data. Please check network',
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({
        query,
        results: {},
        message: '',
        totalPages: 0,
        // eslint-disable-next-line react/no-unused-state
        totalAllResults: 0,
      });
    } else {
      this.setState({ query, loading: true, message: '' }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };

  /**
   * Fetch results according to the prev or next page requests.
   *
   * @param {String} type 'prev' or 'next'
   */
  handlePageClick = (type, event) => {
    event.preventDefault();

    const { currentPageNo, loading, query } = this.state;

    const updatePageNo = type === 'prev' ? currentPageNo - 1 : currentPageNo + 1;

    if (!loading) {
      this.setState({ loading: true, message: '' }, () => {
        this.fetchSearchResults(updatePageNo, query);
      });
    }
  };

  renderSearchResults = () => {
    const { results } = this.state;

    if (Object.keys(results).length && results.length) {
      return (
        <div className={grid.row}>
          {results.map((result) => (
            <MovieCard
              key={result.imdbID}
              id={result.imdbID}
              posterUrl={result.Poster}
              posterAlt={result.Title}
              title={result.Title}
              year={result.Year}
              type={result.Type}
            />
          ))}
        </div>
      );
    }
    return false;
  };

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { query, loading, message, currentPageNo, totalPages } = this.state;

    const showPrevLink = currentPageNo > 1;
    const showNextLink = totalPages > currentPageNo;

    return (
      <div>
        <h1 className={css['c-search__title']}>Find a movie, serie or episode...</h1>
        <label htmlFor="search-input">
          <input
            type="text"
            name="query"
            className={css['c-search__input']}
            value={query}
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
            autoComplete="off"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus="on"
          />
        </label>

        {message && <p className={css['c-search__message']}>{message}</p>}

        {this.renderSearchResults()}

        <PageNavigation
          loading={loading}
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={() => this.handlePageClick('prev', event)}
          handleNextClick={() => this.handlePageClick('next', event)}
        />
      </div>
    );
  }
}

export default Search;
