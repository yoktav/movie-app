import React from 'react';
import PropTypes from 'prop-types';
import css from './PageNavigation.scss';

const PageNavigation = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { showPrevLink, showNextLink, handlePrevClick, handleNextClick } = props;
  return (
    <div className={css['c-page-navigation']}>
      <button
        type="button"
        className={`${css['c-page-navigation__button']} ${
          showPrevLink ? css['is-show'] : css['is-hidden']
        }`}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        type="button"
        className={`${css['c-page-navigation__button']} ${
          showNextLink ? css['is-show'] : css['is-hidden']
        }`}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

PageNavigation.propTypes = {
  showPrevLink: PropTypes.bool,
  showNextLink: PropTypes.bool,
  handlePrevClick: PropTypes.func,
  handleNextClick: PropTypes.func,
};

export default PageNavigation;
