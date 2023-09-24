import { ReactNode, createContext, useState } from "react";
import { loginUser } from "../../data/baseAPI";
import { toast } from "react-toastify";
import { LoginUserResponse, UserProfile } from "../../data/types";

export interface UserContextProps {
  token: string | null;
  profile: UserProfile | null;
  isLogin: boolean;
  logining: boolean;
  // loginData: UserProfile | null;
  login: (email: string, password: string) => void;
  checkLocalStorage: () => void;
}

export const UserContext = createContext<UserContextProps>({
  token: null,
  profile: null,
  isLogin: false,
  logining: false,
  login: () => {},
  checkLocalStorage: () => {},
});

export const UserProvider = (props: { children: ReactNode }) => {
  const [logining, setLogining] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const checkLocalStorage = async () => {
    const localData = await JSON.parse(localStorage.getItem("userLogin") || "");
    setLogining(true);
    setToken(localData.token);
    setProfile(localData.user);
    toast("Jesteś zalogowany", { type: "success" });
    console.log(localData);
  };

  const login = async (email: string, password: string) => {
    console.log(email, password);
    setLogining(true);

    if (email && password) {
      try {
        const data = await loginUser(email, password);
        if (data.status !== 200) {
          toast("Zły email lub hasło", { type: "error" });
        }
        if (data.ok) {
          const jsonData: LoginUserResponse = await data.json();
          setToken(jsonData.token);
          setProfile(jsonData.user);
          toast("Jesteś zalogowany", { type: "success" });
          localStorage.setItem("userLogin", JSON.stringify(jsonData));
        }
      } catch (error) {
        alert(error);
        toast("Zły email lub hasło", { type: "error" });
      } finally {
        setLogining(false);
      }
    } else {
      toast("Wpisz e-mail i hasło", { type: "error" });
    }
  };

  return (
    <UserContext.Provider
      value={{
        logining,
        token,
        profile,
        isLogin: Boolean(profile),
        login,
        checkLocalStorage,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
