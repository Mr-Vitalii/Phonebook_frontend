import styled from "@emotion/styled";


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.gray};
  border-bottom: 1px solid ${(props) => props.theme.colors.skyBlueDark};
`;

