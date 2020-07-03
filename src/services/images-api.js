import axios from 'axios';

const key = '16188386-9c486355758a5fe84f7a70228';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const apiFetch = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `?key=${key}&q=${searchQuery}&page=${currentPage}&per_page=${'12'}&image_type=photo&orientation=horizontal`,
    )
    .then(response => response.data.hits);
};

export default apiFetch;
