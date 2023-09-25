import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoginUserResponse, UserProfile } from "../data/types";
import { useAPI } from "../data/useAPI";

export interface UserContextProps {
  token: string | null;
  profile: UserProfile | null;
  isLogin: boolean;
  logining: boolean;
  login: (email: string, password: string) => void;
  setUserProfile: (token: string, profile: UserProfile) => void;
  checkLocalStorage: () => void
}

export const UserContext = createContext<UserContextProps>({
  token: null,
  profile: null,
  isLogin: false,
  logining: false,
  login: () => {},
  setUserProfile: () => {},
  checkLocalStorage: () => {}
});

const TokenStorageKey = "userToken";
const ProfileStorageKey = "userLogin";

export const UserProvider = (props: { children: ReactNode }) => {
  const [logining, setLogining] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const { loginUser } = useAPI();

  const checkLocalStorage = () => {
    const localData = localStorage.getItem(ProfileStorageKey);
    const profile = localData ? (JSON.parse(localData) as UserProfile) : null;
    const localToken = localStorage.getItem(TokenStorageKey);
    if (localToken && profile) {
      setToken(localToken);
      setProfile(profile);
      toast("Jesteś zalogowany", { type: "info" });
      console.log(profile, localToken);
      setLogining(true);
    }
  };

  const setUserProfile = (token: string, profile: UserProfile) => {
    setProfile(profile);
    setToken(token);
    localStorage.setItem(TokenStorageKey, token);
    localStorage.setItem(ProfileStorageKey, JSON.stringify(profile));
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
          const { token, user } = jsonData;
          setToken(token);
          setProfile(user);
          toast("Jesteś zalogowany", { type: "success" });
          setUserProfile(token, user);
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
        setUserProfile,
        checkLocalStorage,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
