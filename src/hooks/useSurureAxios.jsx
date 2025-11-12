import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

const useSurureAxios = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const reqInterceptor = instance.interceptors.request.use((config) => {
      const token = user?.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const resInterceptor = instance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const status = err.response?.status;
        if (status === 401 || status === 403) {
          await logout();
          navigate('/login');
        }
        return Promise.reject(err); 
      }
    );

    return () => {
      instance.interceptors.request.eject(reqInterceptor);
      instance.interceptors.response.eject(resInterceptor);
    };
  }, [user, logout, navigate]);

  return instance;
};

export default useSurureAxios;
