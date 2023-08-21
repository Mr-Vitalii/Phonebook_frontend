import styled from "@emotion/styled";


export const InputButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 2px;
  border: 0;
  border-radius: 50%;
  background-color: inherit;
  color: ${(props) => props.theme.colors.white};
  font: inherit;
  cursor: pointer;
`;