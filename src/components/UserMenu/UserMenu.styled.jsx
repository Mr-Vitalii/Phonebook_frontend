import styled from "@emotion/styled";

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Avatar = styled.img`
  margin-right: 4;
`;

export const Greeting = styled.span`
  font-weight: 700;
  margin-right: 12;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.skyBlueDark};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.turquoise};
  }
`;


