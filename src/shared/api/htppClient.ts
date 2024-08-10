import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });


const token = localStorage.getItem('bear');

if (token) {
    api.defaults.headers.common.Authorization = token;
}
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const res = error.response;
        console.warn({ res });

        if (res) {
            switch (res.status) {
                case 401:
                    window.location.href = '/login';
                    break;
                case 404:
                    break;
                default: {
                    console.warn('default');
                }
            }
        }

        return Promise.reject(error);
    },
);

export { api };
