import { CreateUserProfile, UserProfile } from "./types";
import axios, { AxiosResponse } from "axios";

export const HOST = "https://api-eko-bazarek.azurewebsites.net/api";

// export const HOST = "http://localhost:3000"

export const CATEGORIES_HOST =
  "https://api-eko-bazarek.azurewebsites.net/api/products/categories/top";

export const fetchSubscribe = (email: string) => {
  return fetch(HOST + "/subscribe", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchContact = (
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
};

export const loginUser = (email: string, password: string) => {
  return fetch(HOST + "/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createUser = (newUser: CreateUserProfile) => {
  return fetch(HOST + "/users", {
    method: "POST",
    body: JSON.stringify({ ...newUser }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createUserAxios = (
  newUser: CreateUserProfile
): Promise<AxiosResponse<unknown, unknown>> =>
  axios.post(HOST + "/users", newUser);


export const changePassword = (
  token: string,
  oldPassword: string,
  newPassword: string
) => {
  return fetch(HOST + "/users/change-password", {
    method: "POST",
    body: JSON.stringify({ oldPassword, newPassword }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
  });
};

export const loadUser = (user: UserProfile, token: string) => {
return fetch(HOST + "/users", {
method: "GET", 
body: JSON.stringify(user),
headers: {
  "Content-Type": "application/json",
  Authorization: "Bearer" + token,
},
})
}

export const getTypes = () => {
  fetch(HOST + "/products/types")
}

export const getCategories = () => {
  fetch(HOST + "/products/categories")
}

export const getUnits = () => {
  fetch(HOST + "/products/units")
}