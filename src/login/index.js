import React from 'react';
import ReactDom from 'react-dom';
import Login from './Login';

import '@/assets/styles/import.scss';
import '@/assets/styles/main.scss';
import './login.scss';

const container = document.getElementById('root');

ReactDom.render(<Login />, container);
