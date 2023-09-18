import { useContext, useState } from "react";
import { Content, TextField } from "../components";
import { Button } from "../components/Button";
import { UserContext } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export const ProfileSignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, login } = useContext(UserContext);
  const navigate = useNavigate();




  return (
    <Content title="Profil">
      {isLogin ? (
        <Navigate replace to="/profile" />
      ) : (
        <>
          <h1 className="container uppercase">zaloguj się</h1>
          <form className="flex flex-col w-[515px] gap-y-[34px] mt-[38px]">
            <TextField
              className="mt-2 w-[515px]"
              label="Email" 
              required={true} 
              inputProps={{
                type: "email",
                value: email,
                onChange:(e) => setEmail(e.target.value)
              }}
            />
            <TextField
              className="mt-2 w-[515px]"
              label="Hasło"
              required={true}
              inputProps={{
                type: "password",
                value: password,
                onChange:(e) => setPassword(e.target.value)
              }}
            />
            <div className="flex justify-start flex-row-reverse gap-[16px] mt-[30px] mb-[189px]">
            <Button
                variant="contained"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  login(email, password);
                }}
              >
                Zaloguj się
              </Button>

              <Button
                variant="text"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  navigate("/registration");
                }}
              >
                Zarejestruj sie
              </Button>
            </div>
          </form>
        </>
      )}
    </Content>
  );
};
