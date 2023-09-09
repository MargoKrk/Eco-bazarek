import { ReactNode, createContext, useState } from "react";
import { loginUser } from "../../data/baseAPI";
import { toast } from "react-toastify";
import { LoginUserResponse, UserProfile } from "../../data/types";

export interface UserContextProps {
  token: string | null;
  profile: UserProfile | null;
  isLogin: boolean;
  logining: boolean;
  login: (email: string, password: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  token: null,
  profile: null,
  isLogin: false,
  logining: false,
  login: () => {},
});

export const UserProvider = (props: { children: ReactNode }) => {
  const [logining, setLogining] = useState(false);
  //   const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const login = async (email: string, password: string) => {
    console.log(email, password);
    setLogining(true);

    try {
      const data = await loginUser(email, password);
      const jsonData: LoginUserResponse = await data.json();
      setToken(jsonData.token);
      setProfile(jsonData.user);
      console.log(jsonData);
    } catch (error) {
      alert(error);
      toast("Zły email lub hasło", { type: "error" });
    } finally {
      setLogining(false);
    }
  };

  return (
    <UserContext.Provider value={{ logining, token, profile, isLogin:Boolean(profile), login }}>
      {props.children}
    </UserContext.Provider>
  );
};
