import styled from "@emotion/styled";

export const ContactsForm = styled.form`
  margin-bottom: 15px;
`;

export const InputContainer = styled.div`
  padding: 10px 0;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  margin-left: 5px;
  outline: none;
  padding: 5px 10px;
`;

export const FormError = styled.p`
  color: ${(props) => props.theme.colors.red};
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

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.turquoise};
  }
`;
