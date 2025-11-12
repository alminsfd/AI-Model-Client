import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const useSurureAxios = () => {
    const navigate=useNavigate()
    const { user , logout} = useAuth()
    const instance = axios.create({
        baseURL: 'http://localhost:5000',
    });

    useEffect(() => {
        const reqInterceptor = axios.interceptors.request.use((config) => {
            const Token = user.accessToken
            if (Token) {
                config.headers.Authorization = `Bearer ${Token}`
            }
            return config
        })

        const responceInterceptor = axios.interceptors.response.use(res => {
            return res
        }, err => {
            const status=err.status
            if(status===401 ||status===403){
                 logout()
                 .then(()=>{
                    navigate('/login')
                 })

            }
        })

        return () => {
            axios.interceptors.request.eject(reqInterceptor)
            axios.interceptors.response.eject(responceInterceptor)
        }
    }, [user,logout,navigate])

    return instance
};

export default useSurureAxios;