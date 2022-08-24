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
    searchRepos(searchText).then((res) => {
      const data = res.data.items;
      setRepolist(data);
      return res.data.items;
    });
  };

  useEffect(() => {
    repos();
  }, [searchText]);

  const addRepo = (item) => {
    // add 클릭 시 repo name, repo owner 정보를 저장한다.
    saveRepo(item?.full_name);
  };

  const saveRepo = (repo_name) => {
    let repoList = localStorage.getItem('repoList');
    let repoArr = [];
    if (!repoList) {
      repoArr.push(repo_name);
      localStorage.setItem('repoList', JSON.stringify(repoArr));
      alert('레포가 추가되었습니다.');
    } else {
      repoArr = JSON.parse(repoList);
      if (repoArr.length >= 4) {
        repoArr.push(repo_name);
        localStorage.setItem('repoList', JSON.stringify(repoArr.splice(1)));
        alert('레포 즐겨찾기 목록이 꽉 찼습니다. 맨 처음 레포를 빼고 레포를 추가합니다.');
      } else {
        repoArr.push(repo_name);
        localStorage.setItem('repoList', JSON.stringify(repoArr));
        alert('레포가 추가되었습니다.');
      }
    }
  };

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
