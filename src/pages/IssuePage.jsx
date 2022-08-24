import * as React from 'react';
import { useState } from 'react';
import IssueCards from '../components/IssueCards';
import BasicPagination from '../components/Pagenation';

const IssuePage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <IssueCards page={page}></IssueCards>
      <BasicPagination page={page} setPage={setPage} />
    </div>
  );
};

export default IssuePage;
