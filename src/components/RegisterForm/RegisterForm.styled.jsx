import styled from "@emotion/styled";

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 20px;
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.skyBlueDark};
  color: ${(props) => props.theme.colors.white};
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

export const Div = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  font-size: 12px;
`;

export const AuthorizationSpan = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.colors.skyBlueDark};
`;






