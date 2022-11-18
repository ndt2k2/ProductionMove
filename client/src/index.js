import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import Distributor from './components/Distributor';
import ManufactureFactory from './components/ManufactureFactory';
import ServiceCenter from './components/ServiceCenter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {
  "name": "quyet",
  "typeAccount": "sanxuat"
}

root.render(


  <React.StrictMode>
    {user.typeAccount === "admin" &&
      <Admin/>
    }
    {user.typeAccount === "daily" &&
      <Distributor/>
    }
    {user.typeAccount === "sanxuat" &&
      <ManufactureFactory/>
    }
    {user.typeAccount === "baohanh" &&
      <ServiceCenter/>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
