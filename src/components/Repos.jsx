import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Elevation from './Elevation';
import FullWidthTextField from './InputText';

const Repos = () => {
  const [searchText, setSearchText] = useState();

  return (
    <div>
      <FullWidthTextField searchText={searchText} setSearchText={setSearchText} />
      {searchText ? <Elevation searchText={searchText} /> : <></>}
    </div>
  );
};
export default Repos;
