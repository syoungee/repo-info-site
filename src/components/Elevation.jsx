import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { searchRepos } from '../api/api';
// import { useLocation } from 'react-router-dom';
// import { repo_data } from '../dummy-data';
import Skeleton from '@mui/material/Skeleton';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  lineHeight: '100%',
  overflow: 'auto',
}));

// dark mode
// const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation(props) {
  const { searchText } = props;
  const [repolist, setRepolist] = useState();
  //const location = useLocation();
  const skeletons = Array.from({ length: 10 }, (v, i) => i);

  const repos = () => {
    // console.log(inputText.inputText);
    searchRepos(searchText).then((res) => {
      const data = res.data.items;
      setRepolist(data);
      return res.data.items;
    });
  };

  useEffect(() => {
    repos();
  }, [searchText]);

  return (
    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index} style={{ marginLeft: '-40px' }}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
                width: '100%',
              }}
            >
              {/* repo_data[0].items?
                  API가 막혔을 경우 더미데이터 사용
              */}
              {repolist
                ? repolist.map((elevation, index) => (
                    <Item key={index} elevation={5} style={{ width: '100%' }}>
                      <p style={{ verticalAlign: 'middle', overflow: 'auto' }}>
                        {`owner ${elevation.owner.login} repo ${elevation.full_name} url ${elevation.html_url} stars ${elevation.stargazers_count} issues ${elevation.open_issues_count}`}
                        <br />
                        <button>add</button>
                      </p>
                    </Item>
                  ))
                : skeletons.map((item, index) => <Skeleton key={index} variant="rectangular" style={{ width: '100%' }} height={118} />)}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
