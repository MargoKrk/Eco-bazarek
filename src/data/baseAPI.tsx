import { CreateUserProfile, UserProfile } from "./types";

export const HOST = "https://api-eko-bazarek.azurewebsites.net/api";

// export const HOST = "http://localhost:3000"

export const CATEGORIES_HOST =
  "https://api-eko-bazarek.azurewebsites.net/api/products/categories/top";


export const createUser = (newUser: CreateUserProfile) => {
  return fetch(HOST + "/users", {
    method: "POST",
    body: JSON.stringify({ ...newUser }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loadUser = (user: UserProfile, token: string) => {
  if(!token) throw new Error("Nie ma tokenu")
return fetch(HOST + "/users", {
method: "GET", 
body: JSON.stringify(user),
headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
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