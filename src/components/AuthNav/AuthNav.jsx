import React from "react";

import { AuthLink, AuthNavigation } from "./AuthNav.styled";


export const AuthNav = () => {
   return (
     <AuthNavigation>
       <AuthLink
         to="/register"
       >
         Registration
       </AuthLink>
       <AuthLink
         to="/login"
       >
         LogIn
       </AuthLink>
     </AuthNavigation>
   );
}



