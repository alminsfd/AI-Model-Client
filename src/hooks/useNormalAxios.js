import axios from 'axios';


const useNormalAxios = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:5000',
    });

    return instance

};

export default useNormalAxios;

