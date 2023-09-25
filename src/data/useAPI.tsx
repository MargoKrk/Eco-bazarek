import { useContext } from "react";
import { UserContext, UserContextProps } from "../context/UserContext";
import { HOST } from "./baseAPI";
import { CreateUserProfile, UserProfile } from "./types";
import axios, { AxiosResponse } from "axios";

export const useAPI = () => {
  const { token } = useContext<UserContextProps>(UserContext);
  return {
    fetchSubscribe: (email: string) => {
      return fetch(HOST + "/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    fetchContact: (
      email: string,
      fullName: string,
      phone: string,
      theme: string,
      message: string
    ) => {
      return fetch(HOST + "/contact", {
        method: "POST",
        body: JSON.stringify({ email, fullName, phone, theme, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    loginUser: (email: string, password: string) => {
      return fetch(HOST + "/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    createUser: (newUser: CreateUserProfile) => {
      return fetch(HOST + "/users", {
        method: "POST",
        body: JSON.stringify({ ...newUser }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    createUserAxios: (
      newUser: CreateUserProfile
    ): Promise<AxiosResponse<unknown, unknown>> =>
      axios.post(HOST + "/users", newUser),

    changePassword: (oldPassword: string, newPassword: string) => {
      if (!token) throw new Error("Nie ma tokenu :(");
      return fetch(HOST + "/users/change-password", {
        method: "POST",
        body: JSON.stringify({ oldPassword, newPassword }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },

    downloadUser: (token:string) => {
      if (!token) throw new Error("Nie ma tokenu :(");
      return fetch(HOST + "/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    getTypes: () => {
      fetch(HOST + "/products/types");
    },
    getCategories: () => {
      fetch(HOST + "/products/categories");
    },
    getUnits: () => {
      fetch(HOST + "/products/units");
    },
  };
};