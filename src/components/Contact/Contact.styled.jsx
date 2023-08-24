import styled from "@emotion/styled";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 2px solid ${(props) => props.theme.colors.skyBlueDark};
  overflow-x: auto;
`;

export const ItemContainer = styled.div`
  display: flex;
  column-gap: 5px;
  padding: 5px;
  overflow-x: auto;
`;

export const Item = styled.div`
  
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
