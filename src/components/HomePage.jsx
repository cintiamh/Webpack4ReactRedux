/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
  <div>
    <h1>Welcome to my App!</h1>
    <Link to="library">
      <button>Visit Library</button>
    </Link>
  </div>
);

export default HomePage;
