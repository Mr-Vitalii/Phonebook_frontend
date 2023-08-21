import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 2px solid ${(props) => props.theme.colors.skyBlueDark};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 5px;
`;

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.colors.skyBlueDark};
  color: white;
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.turquoise};
  }
`;
