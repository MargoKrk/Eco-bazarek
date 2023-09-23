import { FormEvent, useState } from "react";
import { CreateUserProfile } from "../../../data/types";
import { getDefaultCreateUserProfile } from "./utils";
import { createUser, createUserAxios } from "../../../data/baseAPI";
import { InputProps } from "../../components/TextField";
import { TextAreaProps } from "../../components/TextAreaField";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useRegistrationForm = () => {
  const [formData, setFormData] = useState<CreateUserProfile>(
    getDefaultCreateUserProfile
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(errors).length < 0) {
        toast("Wypełnij wszystkie wymagane pola formularza", { type: "error" });
      }

    try {
      const { data } = await createUserAxios(formData);
      console.log(data);
      navigate("/profile")
    } catch (err) {
      const error = err as AxiosError<{
        inner: { path: string; message: string }[];
      }>;
      if (error.response?.status === 400) {
        const validationErros = error.response?.data;
        if (validationErros)
          setErrors(
            validationErros.inner.reduce<{ [key: string]: string }>(
              (prev, curr) => {
                prev[curr.path] = curr.message;
                return prev;
              },
              {}
            )
          );
      }
    }
  };

  const getFieldProps = (
    key: keyof CreateUserProfile
  ): InputProps & TextAreaProps => ({
    name: key,
    value: formData[key],
    onChange: (e) => {
      setErrors((prev) => {
        const next = structuredClone(prev);
        delete next[key];
        return next;
      });
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    },
    onBlur: (e) => {
        if(key === "repeatPassword") {
            const value = e.target.value
            if(value !== formData.password) {
                setErrors((prev) => {
                    prev[key] = "Hasła muszą być takie same"
                    return {...prev}
                })
            }
        }
    }
  });

  const handleReset = () => {
    setFormData(getDefaultCreateUserProfile);
  };

  const getError = (key: keyof CreateUserProfile) => errors[key];

  const getTextFieldProps = (key: keyof CreateUserProfile) => {
    const error = getError(key);
    return {
      error: Boolean(error),
      helperText: getError(key),
    };
  };

  const isValid = Object.keys(errors).length <= 0;

  return {
    isValid,
    getFieldProps,
    handleSubmit,
    handleReset,
    getTextFieldProps,
    formData,
  };
};
