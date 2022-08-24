import * as React from 'react';
import { useState } from 'react';
import IssueCards from '../components/IssueCards';
import BasicPagination from '../components/Pagenation';

const IssuePage = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <IssueCards page={page}></IssueCards>
      <BasicPagination page={page} onChange={handleChange} />
    </div>
  );
};

export default IssuePage;
