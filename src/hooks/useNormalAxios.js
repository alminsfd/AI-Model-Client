import axios from 'axios';


const useNormalAxios = () => {
    const instance = axios.create({
        baseURL: 'https://ai-model-server-ashen.vercel.app',
    });

    return instance

};

export default useNormalAxios;

