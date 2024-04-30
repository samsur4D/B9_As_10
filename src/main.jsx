import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import NotFound from './Pages/Notfound.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Roots from './Rooter/Roots.jsx';
import AllTourist from './Pages/AllTourist.jsx';
import Addspot from './Pages/Addspot.jsx';
import Mylist from './Pages/Mylist.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Protectroute from './Components/Protectroute.jsx';
import Update from './Pages/Update.jsx';
import Details from './Pages/Details.jsx';
import Countrywise from './Pages/Countrywise.jsx';
import Coupon from './Pages/Coupon.jsx';

    




const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
       element: <Home></Home>,
      },
      {
       path: "/details/:id",
       element:  <Protectroute> <Details></Details>  </Protectroute>
      },
      {
        path: "/alltourist",
        element: <AllTourist></AllTourist>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: "/addspot",
        element: <Protectroute><Addspot></Addspot></Protectroute>
      },
      {
        path: "/mylist",
        element: <Protectroute><Mylist></Mylist></Protectroute>
      },
      {
        path: "/countrywise/:country",
        element: <Countrywise></Countrywise>
      },
      {
        path: "/coupon",
        element:  <Protectroute> <Coupon></Coupon> </Protectroute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path: "/update/:id",
        element:  <Protectroute><Update></Update></Protectroute>
      }
      
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

          <AuthProvider>
            
                          <RouterProvider router={router} />
          </AuthProvider>

  </React.StrictMode>,
)
