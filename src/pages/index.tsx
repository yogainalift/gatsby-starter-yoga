import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: () => JSX.Element = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/app/random-person/2">
      Go to page with an api call of 2 persons
    </Link>
  </Layout>
);

export default IndexPage;
