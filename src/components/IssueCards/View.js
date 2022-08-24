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
  const { skeletons, issueList } = props;

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
              {issueList
                ? issueList.map((issue, index) => (
                    <Item key={index} elevation={5} style={{ width: '100%' }}>
                      <p style={{ verticalAlign: 'middle', overflow: 'auto' }}>
                        <b>{`${issue.url}`}</b>
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
