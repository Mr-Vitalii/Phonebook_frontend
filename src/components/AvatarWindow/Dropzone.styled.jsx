import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const DropContainer = styled.div`
  border: 2px dashed ${(props) => props.theme.colors.grey};
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.skyBlueDark};
  }
`;

export const FilePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: 5px;
  }

  button {
    margin-top: 5px;
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.red};
    }
  }
`;

export const RejectedFiles = styled.div`
  margin-top: 20px;
  ul {
    list-style: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 5px;
    background-color: ${(props) => props.theme.colors.greyLight};
    color: ${(props) => props.theme.colors.red};
    p {
      margin: 0;
    }
  }
  button {
    margin-top: 5px;
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.red};
    }
  }
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
