import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjc1ZmQ3MWEwZWUxODdmZGUxMWE3ZGRmOGMyZGIxMyIsInN1YiI6IjVmZGM2Y2VlZDQ2NTM3MDA0MDRiMjQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V5JgKl3HpP6coFFX_-myChH7MxUXS1ilBMZSNL-6hBw';

// const trend = `https://api.themoviedb.org/3/trending/movie/day?api_key=0675fd71a0ee187fde11a7ddf8c2db13`;
// const query = `https://api.themoviedb.org/3/search/movie?query=${'robocop'}&api_key=0675fd71a0ee187fde11a7ddf8c2db13&language=en-US&page=1&include_adult=false`;
// const movieId = `https://api.themoviedb.org/3/movie/${74236}?api_key=0675fd71a0ee187fde11a7ddf8c2db13&language=en-US`;
// const actors = `https://api.themoviedb.org/3/movie/${74236}/credits?api_key=0675fd71a0ee187fde11a7ddf8c2db13&language=en-US`;
// const review = `https://api.themoviedb.org/3/movie/${74236}/reviews?api_key=0675fd71a0ee187fde11a7ddf8c2db13&language=en-US`;

function fetchTranding() {
  return axios
    .get('/trending/movie/day', {
      params: {
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data;
    });
}
function fetchQuery(search) {
  return axios
    .get(`/search/movie`, {
      params: {
        language: 'en-US',
        query: search,
      },
    })
    .then(response => {
      return response.data;
    });
}
function fetchMovie(id) {
  return axios
    .get(`/movie/${id}`, {
      params: {
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data;
    });
}
function fetchActors(id) {
  return axios
    .get(`/movie/${id}/credits`, {
      params: {
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data;
    });
}
function fetchReview(id) {
  return axios
    .get(`/movie/${id}/reviews`, {
      params: {
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data;
    });
}
export { fetchTranding, fetchQuery, fetchMovie, fetchActors, fetchReview };
