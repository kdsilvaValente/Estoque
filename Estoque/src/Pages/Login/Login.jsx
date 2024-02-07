import {
  Body,
  Enter,
  Forget,
  Image,
  Password,
  Title,
  User,
  LoginButton,
  Conteiner,
  ConteinerTwo,
  Font,
  UserInput,
  PasswordInput,
  Underline,
  Bottom,
} from "./styles";

import { useState } from "react";

import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Estoque from "../../Images/Estoque.png";

export function Login() {
  const [mode, SetMode] = useState(false);
  function See() {
    SetMode(!mode);
  }
  return (
    <Body>
      <Conteiner>
        <Image src={Estoque}></Image>
      </Conteiner>

      <Enter>
        <ConteinerTwo>
          <Title>
            <Underline>Login</Underline>
          </Title>
          <User>
            {" "}
            <Font>Usuário</Font>
            <UserInput />
          </User>
          <Password>
            {" "}
            <Font>Senha</Font>
            <PasswordInput type={mode ? "text" : "password"} />
            <a onClick={See}>{mode ? <IoEyeOff /> : <IoEyeSharp />}</a>
          </Password>
          <LoginButton>
            {" "}
            <Bottom>
              <Font>
                <a>Login</a>
              </Font>
            </Bottom>
            <Font>Esqueceu a senha?</Font>
          </LoginButton>
          <Forget />
        </ConteinerTwo>
      </Enter>
    </Body>
  );
}

export default Login;
