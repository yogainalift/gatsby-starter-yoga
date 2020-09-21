import { Link } from 'gatsby';
import React from 'react';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle = '' }: Props) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0, color: 'white', marginRight: '4rem' }}>
        {siteTitle}
      </h1>
      <nav style={{ color: 'white' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: '1rem',
          }}
        >
          Home
        </Link>
        <Link
          to="/random-results/2"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Random
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
