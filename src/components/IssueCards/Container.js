import * as React from 'react';
import { useEffect, useState } from 'react';
import { getIssues } from '../../api/api';
import View from './View';

const Container = (props) => {
  const page = props.page;
  const skeletons = Array.from({ length: 10 }, (v, i) => i);
  const [allIssues, setAllIssues] = useState([]);

  useEffect(() => {
    issues();
  }, [page]);

  const issues = () => {
    const RepoArr = JSON.parse(localStorage.getItem('repoList'));
    RepoArr.map((repo) => {
      const [owner, repo_name] = repo.split('/');
      console.log(owner, repo_name);
      getIssue(owner, repo_name, 'open', page);
    });
  };
  const getIssue = (owner, repo_name, page) => {
    getIssues(owner, repo_name, 'open', page)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setAllIssues(allIssues.concat(data));
        return data;
      });
  };
  return <View skeletons={skeletons} allIssues={allIssues}></View>;
};

export default Container;
