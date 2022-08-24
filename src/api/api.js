const fetchRepos = async (q = '', sort = 'best match', order = 'desc', page = 1, per_page) => {
  return fetch(
    `https://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}&page=${page}&per_page=${per_page}`,
    // `https://api.github.com/search/repositories?q=${q}+language:${encodeURIComponent(language.toLowerCase())}&sort=${sort}&order=${order}&page=${page}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(JSON.stringify(data, undefined, 2));
      // console.log(data.length());
      console.log(data.items[0], data.total_count);
      // html_url(url), topics(array)
    })
    .catch((err) => {
      console.error(err);
    });
};

const getIssues = async (owner, repo, state, per_page) => {
  //repos/{owner}/{repo}/issues
  return fetch(
    `https://api.github.com/search/repos/${owner}/${repo}/issues?state=${state}&per_page=${per_page}`,
    // `https://api.github.com/search/repositories?q=${q}+language:${encodeURIComponent(language.toLowerCase())}&sort=${sort}&order=${order}&page=${page}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(JSON.stringify(data, undefined, 2));
      // console.log(data.length());
      console.log('issue data?');
      console.log(data);
      // html_url(url), topics(array)
    })
    .catch((err) => {
      console.error(err);
    });
};

export default { fetchRepos, getIssues };
