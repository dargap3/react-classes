import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Header = ({ title }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "10px 20px",
    backgroundColor: 'black',
    color: 'white'
  }}>
    <h1>{title}</h1>
    <div>
      <Link to="/" style={{ display: 'inline-block', marginRight: '20px', color: 'white' }}>Home</Link>
      <Link to="/messages" style={{ color: 'white' }}>Messages</Link>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
