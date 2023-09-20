import { CreateUserProfile } from "../../../data/types";

export const getDefaultCreateUserProfile = (): CreateUserProfile => ({
    city: "",
    country: "",
    county: "",
    district: "",
    email: "",
    farmDesc: "",
    farmName: "",
    firstName: "",
    flatNumber: "",
    lastName: "",
    phone: "",
    postCode: "",
    street: "",
    streetNumber: "",
    voivodeship: "",
    password: "",
    repeatPassword: "",
  });
  