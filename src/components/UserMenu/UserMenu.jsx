import React, { useState } from "react";

import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";

import { Avatar, Button, Greeting, UserMenuContainer } from "./UserMenu.styled";
import { useAuth } from "hooks/useAuth";
import { AvatarWindow } from "components/AvatarWindow/AvatarWinidow";


export const UserMenu = () => {

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  const openModal = () => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
  };
  const closeModal = () => {
    document.body.style.overflow = "";
    setShowModal(false);
  };

  return (
    <>
      <UserMenuContainer>
        <Avatar
          src={user.avatarURL}
          alt="user avatar"
          width="32"
          onClick={openModal}
        />
        <Greeting>{user.email}</Greeting>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </UserMenuContainer>
      <AvatarWindow showModal={showModal} closeModal={closeModal} />
    </>
  );
};
