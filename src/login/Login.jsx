import React from 'react';
import {Alert} from 'antd';
import Header from '../components/Header';

const Login = () => {
  return (
    <div className="login-page">
      <Header title="Login"></Header>
      <i className="fas fa-sign-in-alt"></i>
      <Alert message="Login alert" type="warning" />
    </div>
  );
};

export default Login;
