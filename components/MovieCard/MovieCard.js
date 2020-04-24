import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieCard.scss';
import grid from '../../node_modules/bootstrap/scss/bootstrap-grid.scss';

// eslint-disable-next-line object-curly-newline
const ProductCard = ({ id, posterUrl, posterAlt, title, year, type }) => (
  <div className={`${grid['col-6']} ${grid['col-md-3']}`}>
    <div className={css['c-movie-card']} key={id}>
      <div className={css['c-movie-card__image-wrapper']}>
        <img className={css['c-movie-card__image']} src={posterUrl} alt={posterAlt} />
      </div>

      <div className={css['c-movie-card__content']}>
        <h3 className={css['c-movie-card__title']}>{title}</h3>

        <div className={css['c-movie-card__meta']}>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          {year} | {type}
          <a href={`https://www.imdb.com/title/${id}`} className={css['c-movie-card__link']}>
            imdb
            <svg
              className={css['c-movie-card__icon']}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>view in imdb</title>
              <path d="M22.891 0.266h-7.027c-0.612 0-1.109 0.496-1.109 1.109s0.496 1.109 1.109 1.109h4.35l-10.631 10.631c-0.201 0.201-0.325 0.478-0.325 0.784 0 0.612 0.496 1.109 1.109 1.109 0 0 0 0 0 0v0c0 0 0.001 0 0.001 0 0.306 0 0.583-0.124 0.783-0.325l10.631-10.631v4.35c0 0.612 0.496 1.109 1.109 1.109s1.109-0.496 1.109-1.109v-7.027c0-0 0-0 0-0 0-0.612-0.496-1.109-1.109-1.109v0z" />
              <path d="M18.356 9.511c-0.612 0-1.109 0.496-1.109 1.109v0 10.897h-15.029v-15.029h11.553c0.612 0 1.109-0.496 1.109-1.109s-0.496-1.109-1.109-1.109h-12.661c-0.612 0-1.109 0.496-1.109 1.109v0 17.247c0 0.612 0.496 1.109 1.109 1.109v0h17.247c0.612 0 1.109-0.496 1.109-1.109v0-12.006c0-0.612-0.496-1.109-1.109-1.109v0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  id: PropTypes.number,
  posterUrl: PropTypes.string,
  posterAlt: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  type: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default ProductCard;
