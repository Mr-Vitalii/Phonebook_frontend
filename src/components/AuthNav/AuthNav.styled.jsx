import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const AuthNavigation = styled.nav`
  display: flex;
  column-gap: 10px;
`;


export const AuthLink = styled(NavLink)`
  display: flex;
  column-gap: 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.skyBlueDark};
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.turquoise};
  }
  &.active {
    color: ${(props) => props.theme.colors.turquoise};
  }
`;




