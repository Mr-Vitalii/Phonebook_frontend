import React from 'react';

import defaultAvatar from "./default-avatar.png";

import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { Avatar, Button, Greeting, UserMenuContainer } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const avatar = defaultAvatar;
  const dispatch = useDispatch();
  const { user } = useAuth();
  // console.log(user);

   return (
     <UserMenuContainer>
       <Avatar src={avatar} alt="" width="32" />
       <Greeting>{user.email}</Greeting>
       <Button type="button" onClick={() => dispatch(logOut())}>
         Logout
       </Button>
     </UserMenuContainer>
   );
}
