import styled from "styled-components";
import { theme } from "../../Styles/Theme";

const ResponseOne = "1200px";
const ResponseTwo = "950px";
const ResponseThree = "850px";
const ResponseFour = "450px";

export const Body = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: row
  height: 1000px;
`;

export const Menu = styled.div`
  width: 60%;
  height: 60%;
  justify-content: center;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.secondary};
  border-radius: 15px;
  gap: 25px;

  @media (max-width: ${ResponseOne}) {
    width: 450px;
  }
  @media (max-width: ${ResponseTwo}) {
    width: 350px;
  }
  @media (max-width: ${ResponseFour}) {
    width: 220px;
    height: 370px;
  }
`;