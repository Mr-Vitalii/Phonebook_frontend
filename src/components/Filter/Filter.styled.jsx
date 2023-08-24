import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
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


export const Checkbox = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;


