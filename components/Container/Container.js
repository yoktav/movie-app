/* eslint-disable no-unused-vars */
import Head from 'next/head';
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { node, string, oneOfType, object, PropTypes } from 'prop-types';
import '../../styles/global.scss';

const Container = ({ children, title = 'App' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([node, string]),
  title: PropTypes.string,
};

export default Container;
