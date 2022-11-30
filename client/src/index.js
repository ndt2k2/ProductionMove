import React from 'react';
import ReactDOM from 'react-dom/client';
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
const user2 = {
  "name": "ha",
  "typeAccount": "baohanh"
}
root.render(
// React.StrictMode

  <>
    {user2.typeAccount === "admin" &&
      <Admin/>
    }
    {user2.typeAccount === "daily" &&
      <Distributor/>
    }
    {user2.typeAccount === "sanxuat" &&
      <ManufactureFactory/>
    }
    {user2.typeAccount === "baohanh" &&
      <ServiceCenter/>
    }
  </>
);


