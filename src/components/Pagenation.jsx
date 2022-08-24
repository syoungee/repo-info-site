import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination(props) {
  const { page, setPage } = props;
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange} color="primary" />
    </Stack>
  );
}
