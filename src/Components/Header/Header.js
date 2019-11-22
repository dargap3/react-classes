import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name, age }) => (
  <h1>El Usuario {name} tiene {age} años</h1>
);

Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default Header;
