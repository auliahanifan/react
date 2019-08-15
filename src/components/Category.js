import React from 'react';
import News from './News';

export default function Category({ match }) {
  return (
    <div>
      <News endpoint={match.params.source_name} />
    </div>
  );
}
