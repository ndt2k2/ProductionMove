import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './displays/admin/Admin';
import Distributor from './displays/distributor/Distributor';
import ManufactureFactory from './displays/manufactureFactory/ManufactureFactory';
import ServiceCenter from './displays/serviceCenter/ServiceCenter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {
  "name": "quyet",
  "typeAccount": "admin"
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


