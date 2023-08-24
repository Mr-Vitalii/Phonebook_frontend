import React, { useState } from 'react'

import { DeleteButton, Container, ItemContainer, Item, ButtonContainer } from "./Contact.styled";

import { useDispatch } from "react-redux";
import { deleteContact, changeStatus } from "redux/contacts/operations";

import { IconButton } from "../IconButton/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";


export const Contact = ({ name, phone, id, favorite }) => {

  const [isFavorite, setIsFavorite] = useState(favorite);

  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFavoriteStatus = (contactId) => {
    setIsFavorite(!isFavorite);
    dispatch(
      changeStatus({
        id: contactId,
        status: !isFavorite,
      })
    );
  };

  return (
    <Container>
      <ItemContainer>
        <Item>{name}: </Item>
        <Item>{phone}</Item>
      </ItemContainer>
      <ButtonContainer>
        <IconButton onClick={() => handleFavoriteStatus(id)}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        <DeleteButton onClick={() => handleDeleteContact(id)}>
          Delete
        </DeleteButton>
      </ButtonContainer>
    </Container>
  );
};
