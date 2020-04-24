import React from 'react';
import { node, string, oneOfType } from 'prop-types';

// eslint-disable-next-line react/jsx-props-no-spreading
const Content = ({ children, ...props }) => <div {...props}>{children}</div>;

Content.propTypes = {
  children: oneOfType([node, string]),
};

export default Content;
