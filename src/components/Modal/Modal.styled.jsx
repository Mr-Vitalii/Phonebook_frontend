import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  min-height: 300px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.skyBlueDark};
  font-size: 20px;
  font-weight: bold;
  border: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.turquoise};
  }
`;
