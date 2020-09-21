import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../components/layout';

type Props = RouteComponentProps<{
  results: number | undefined;
}>;

export const RandomResults: React.FC<Props> = ({ results = 1 }: Props) => {
  const [person, setPerson] = useState();
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then((x) => x.json())
      .then((x) => setPerson(x));
  }, [results]);

  return (
    <Layout>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </Layout>
  );
};
