import styled from "@emotion/styled";

export const ContactsForm = styled.form`
  margin-bottom: 15px;
`;

export const InputContainer = styled.div`
  margin-bottom: 5px;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  padding-left: 15px;
  width: 100%;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.skyBlueDark};
  }
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
