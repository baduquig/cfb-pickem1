import axios from 'axios';

// TODO: Make this a global URL string
const url = 'http://localhost:5000/posts';

export const fetchPicks = () => axios.get(url);