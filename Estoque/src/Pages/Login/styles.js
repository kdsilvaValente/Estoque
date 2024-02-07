import styled from "styled-components";
import { theme } from "../../Styles/Theme";

const ResponseOne = "1200px";
const ResponseTwo = "950px";
const ResponseThree = "850px";
const ResponseFour = "450px";

export const Body = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: row;
  height: 1000px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Conteiner = styled.div`
  flex: 0.7;
  width: 900px;

  @media (max-width: ${ResponseTwo}) {
    flex: 0.8;
  }
  @media (max-width: ${ResponseThree}) {
    display: none;
  }
`;

export const Enter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${ResponseTwo}) {
    flex: 0.8;
  }
  @media (max-width: ${ResponseThree}) {
    flex: 1;
  }
`;

export const ConteinerTwo = styled.div`
  width: 600px;
  height: 600px;
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

export const Title = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  @media (max-width: ${ResponseFour}) {
    height: 600px;
  }
`;
export const User = styled.div`
  height: 100px;
`;
export const Password = styled.div`
  height: 100px;
  a {
    width: 80px;
    height: 250px;
    display: flex;
    position: relative;
    bottom: 40px;
    margin-left: 20px;
  }
  @media (max-width: ${ResponseFour}) {
    position: absolute;
    margin-top: 50px;
    a {
      bottom: 27px;
      margin-left: 20px;
    }
  }
`;
export const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 100px;
  display: flex;

  @media (max-width: ${ResponseFour}) {
    top: 80px;
  }
`;
export const Forget = styled.div``;
export const UserInput = styled.input`
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 15px;
  height: 70px;
  width: 500px;
  @media (max-width: ${ResponseOne}) {
    width: 350px;
  }
  @media (max-width: ${ResponseTwo}) {
    width: 250px;
  }
  @media (max-width: ${ResponseFour}) {
    width: 150px;
    height: 40px;
  }
`;

export const PasswordInput = styled.input`
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 15px;
  height: 70px;
  width: 500px;
  z-index: -1;

  @media (max-width: ${ResponseOne}) {
    width: 350px;
  }

  @media (max-width: ${ResponseTwo}) {
    width: 250px;
  }
  @media (max-width: ${ResponseFour}) {
    width: 150px;
    height: 40px;
  }
`;

export const Font = styled.div`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.fontsecondary};
  text-decoration: none;

  a {
    color: ${theme.colors.secondary};
    font-size: 20px;
  }
`;
export const Underline = styled.div`
  padding-bottom: 1px;
  font-size: 30px;
  border-bottom: 1px solid ${theme.colors.fontsecondary};
  color: white;
`;

export const Bottom = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 200px;
  height: 45px;
  background-color: ${theme.colors.primary};
  border-color: ${theme.colors.primary};

  @media (max-width: ${ResponseFour}) {
    width: 150px;
    height: 30px;
  }
`;
