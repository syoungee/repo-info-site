import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const [repos, setRepos] = useState();
  useEffect(() => {
    repoList();
  }, []);

  const repoList = () => {
    if (localStorage.getItem('repoList')) {
      let repoArr = JSON.parse(localStorage.getItem('repoList'));
      setRepos(repoArr);
      repoArr.map((repo, index) => {
        return <div key={index} onClick={() => removeRepo(index)}>{`#${index} ${repo} 삭제하기`}</div>;
      });
    } else return;
  };

  const removeRepo = (repo) => {
    console.log(repo);
    let tempRepoArr = JSON.parse(localStorage.getItem('repoList'));
    let index = tempRepoArr.findIndex((item) => {
      return item === repo;
    });
    console.log(index);
    tempRepoArr.splice(index, 1);
    console.log(tempRepoArr);
    localStorage.setItem('repoList', JSON.stringify(tempRepoArr));
    setRepos(tempRepoArr);
  };

  return (
    <div>
      <Link to="/">
        <h1>Main page</h1>
      </Link>
      <div>
        <Link to="/repos">
          <h1>Search Repos</h1>
        </Link>
      </div>
      <div>
        <Link to="/issues">
          <h1>Get Issues</h1>
        </Link>
      </div>
      {repos ? (
        repos.map((repo, index) => {
          return <div key={index} onClick={() => removeRepo(repo)}>{`#${index} ${repo} 삭제하기`}</div>;
        })
      ) : (
        <></>
      )}
    </div>
  );
};
export default Main;
