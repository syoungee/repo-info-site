import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

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
  const { skeletons, allIssues } = props;

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
              {allIssues
                ? allIssues.map((issue, index) => (
                    <Item key={index} elevation={5} style={{ width: '100%' }}>
                      <b>{`${issue.repository_url.split('repos/')[1]}`}</b>
                      <br />
                      {`${issue.title}`}
                      <br />
                      <a href={`${issue.url}`} style={{ textDecorationColor: 'grey', color: 'grey' }}>{`${issue.url}`}</a>
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
