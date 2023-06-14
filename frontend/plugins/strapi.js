import axios from 'axios';

export default ({ app }) => {
    const strapiApi = axios.create({
        baseURL: 'http://localhost:1337',
    });
    app.$strapiApi = strapiApi;
}