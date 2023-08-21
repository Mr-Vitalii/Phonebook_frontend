import { InputButton } from "./IconButton.styled";




export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <InputButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </InputButton>
  );
};
