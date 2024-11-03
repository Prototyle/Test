import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './App'; // AppRouter를 import
import reportWebVitals from './reportWebVitals';

// root element 가져오기
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// AppRouter를 렌더링
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// 성능 측정을 위한 함수
reportWebVitals();
