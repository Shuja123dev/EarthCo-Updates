import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RoutesContext from './context/RoutesContext';

// const baseurl=document.getElementsByTagName('base')[0].getAttribute('href');
// const rootElement=document.getElementById('root');

// ReactDOM.render(<BrowserRouter basename={baseurl}>
//   <App/>
//   </BrowserRouter>,
//   rootElement
//   );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="main-wrapper">
      <RoutesContext>
        <App />
      </RoutesContext>
    </div>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
