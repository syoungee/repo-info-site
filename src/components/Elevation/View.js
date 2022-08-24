import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
// import { repo_data } from '../dummy-data';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  lineHeight: '100%',
  overflow: 'auto',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Views(props) {
  const { addRepo, repolist, skeletons } = props;

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
                        <b>{`${elevation.owner.login}`}</b>
                        <br />
                        <b>{`${elevation.full_name}`}</b>
                        <br />
                        <a href={`${elevation.html_url}`} style={{ textDecorationColor: 'grey', color: 'grey' }}>{`${elevation.html_url}`}</a>
                        <br />
                        {`⭐️stars: `}
                        <b>{`${elevation.stargazers_count}`}</b>
                        <br />
                        {`🐛issues: `}
                        <b>{`${elevation.open_issues_count}`}</b>
                        <br /> <br />
                        <button
                          style={{
                            backgroundColor: '#008CBA',
                            color: 'white',
                            border: '2px solid #008CBA',
                            borderRadius: '6px',
                          }}
                          onClick={() => addRepo(elevation)}
                        >
                          add
                        </button>
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
