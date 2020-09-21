import React from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { RandomResults } from '../modules/RandomResults';

type Props = RouteComponentProps;

const IndexPage: React.FC<Props> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Link to="/random-results/2">
        Go to page with an api call of 2 persons
      </Link>
    </Layout>
  );
};

const IndexPageWithRouter: () => JSX.Element = () => {
  return (
    <Router>
      <IndexPage path="/" />
      <RandomResults path="/random-results/:results" />
    </Router>
  );
};

export default IndexPageWithRouter;
