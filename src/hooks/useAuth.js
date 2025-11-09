// useAuth Custom Hook
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const AuthInfo= useContext(AuthContext)
  return AuthInfo
};

export default useAuth;