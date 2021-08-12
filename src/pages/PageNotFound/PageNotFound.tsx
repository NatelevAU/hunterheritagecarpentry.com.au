import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './PageNotFound.css';
import logo from '../../images/backgrounds/PageNotFound.png';

const PageNotFound: React.FC<{}> = () => {
  const HomeLink: React.FC<{}> = props => <Link to="/" {...props} />;

  return (
    <div className="PageNotFound">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <header className="PageNotFound-header">
        <img src={logo} className="PageNotFound-logo" alt="Page Not Found Logo" />
        <Typography variant="h1">404 - Page not found</Typography>
        <Button size="large" variant="contained" color="primary" component={HomeLink}>
          Home
        </Button>
      </header>
    </div>
  );
};

export default PageNotFound;
