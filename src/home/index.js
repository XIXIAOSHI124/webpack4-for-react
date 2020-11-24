import React from 'react';
import ReactDom from 'react-dom';
import Home from './Home';

import '@/assets/styles/import.scss';
import '@/assets/styles/main.scss';
import './home.scss';

const container = document.getElementById('root');

ReactDom.render(<Home />, container);
