import React from "react";
import { useAuth } from "hooks/useAuth";
import { NavMenu, Link } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavMenu className="navigation">
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavMenu>
  );
};
