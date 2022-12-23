import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './displays/admin/Admin';
import Distributor from './displays/distributor/Distributor';
import ManufactureFactory from './displays/manufactureFactory/ManufactureFactory';
import ServiceCenter from './displays/serviceCenter/ServiceCenter';
import SignIn from './displays/signIn/signIn'

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {
  "name": "quyet",
  "typeAccount": "guest"
}

root.render(
// React.StrictMode

  <>
    {user.typeAccount === "Admin" &&
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
    {user.typeAccount === "guest" &&
      <SignIn/>
    }
  </>
);


