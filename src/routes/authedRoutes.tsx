// import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactElement
}

const AuthedRoutes = ({children}:Props) => {


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('run effect');
    console.log(localStorage.getItem('jwt'));
    
    if (localStorage.getItem('jwt')) {
      console.log('missed');
      
      setIsAuthenticated(true);
    }
  }, [])

  console.log(isAuthenticated);
  
// TODO: clean up auth route

return localStorage.getItem('jwt') ? children : <Navigate to="/login" />
}

export default AuthedRoutes;
