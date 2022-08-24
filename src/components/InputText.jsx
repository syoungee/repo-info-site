import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchButton from './SearchButton';
import { useNavigate } from 'react-router-dom';

export default function FullWidthTextField(props) {
  const { searchText, setSearchText } = props;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const repo_name = document.getElementById('repository').value;
    console.log(document.getElementById('repository').value);
    setSearchText(repo_name);
    navigate('/repos', { state: repo_name });
    document.getElementById('repository').value = '';
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          width: '80%',
          maxWidth: '80%',
          display: 'flex',
        }}
      >
        <TextField fullWidth label="Input Repository Name" id="repository" />
        <SearchButton />
      </Box>
    </form>
  );
}
