import axios from 'axios';

export const searchRepos = async (q = '', sort = 'best match', order = 'desc', page = 1, per_page = 20) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
  };
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}&page=${page}&per_page=${per_page}`, {
      headers: headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getIssues = async (owner, repo, state, page = 1, per_page = 20) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
  };
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues?state=${state}&page=${page}&per_page=${per_page}`, {
      headers: headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
