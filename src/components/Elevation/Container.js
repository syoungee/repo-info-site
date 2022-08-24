import * as React from 'react';
import { useState, useEffect } from 'react';
import { searchRepos } from '../../api/api';
import View from './View';

const Container = (props) => {
  const { searchText } = props;
  const [repolist, setRepolist] = useState();
  const skeletons = Array.from({ length: 10 }, (_, i) => i);

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

  return <View addRepo={addRepo} repolist={repolist} skeletons={skeletons}></View>;
};

export default Container;
