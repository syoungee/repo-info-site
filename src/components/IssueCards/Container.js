import * as React from 'react';
import { useEffect } from 'react';
import { getIssues } from '../../api/api';
import View from './View';

const Container = (props) => {
  const page = props.page;
  const skeletons = Array.from({ length: 10 }, (v, i) => i);
  const issueList = [];

  const issues = () => {
    const RepoArr = JSON.parse(localStorage.getItem('repoList'));
    RepoArr.map((repo) => {
      const [owner, repo_name] = repo.split('/');
      console.log(owner, repo_name);
      getIssues(owner, repo_name, 'open', page).then((res) => {
        const data = res.data;
        console.log(res.data);
        issueList.push(...data);
        return data;
      });
    });
  };

  useEffect(() => {
    issues();
  }, []);

  return <View skeletons={skeletons} issueList={issueList}></View>;
};

export default Container;
