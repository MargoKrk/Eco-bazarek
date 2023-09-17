import { FormEvent, useState } from "react";
import { Content, TextAreaField, TextField } from "../components";
import { Button } from "../components/Button";
import { CreateUserProfile } from "../../data/types";
import { createUser } from "../../data/baseAPI";
import { InputProps } from "../components/TextField";
import { TextAreaProps } from "../components/TextAreaField";

const getDefaultCreateUserProfile = (): CreateUserProfile => ({
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

export const RegistrationPage = () => {
  const [formData, setFormData] = useState<CreateUserProfile>(
    getDefaultCreateUserProfile
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as unknown as CreateUserProfile;
    createUser(data).catch((err) => console.log(err));
  };

  const getFieldProps = (key: keyof CreateUserProfile): InputProps & TextAreaProps => ({
    name: key,
    value: formData[key],
    onChange: (e) =>
      setFormData((prev) => ({ ...prev, [key]: e.target.value })),
  });

  return (
    <Content title="Produkty">
      <form
        className="flex flex-col w-[690px] gap-y-[34px] mb-[113px]"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-rows-3 grid-cols-2 gap-x-[15px] gap-y-[34px]">
          <TextField
            label="Imię"
            required={true}
            inputProps={{ ...getFieldProps("firstName") }}
          />
          <TextField
            label="Nazwisko"
            required={true}
            inputProps={{ ...getFieldProps("lastName") }}
          />
          <TextField
            label="Email"
            required={true}
            inputProps={{ ...getFieldProps("email") }}
          />
          <TextField
            label="Telefon"
            required={true}
            inputProps={{ ...getFieldProps("phone") }}
          />
          <TextField
            label="Hasło"
            required={true}
            inputProps={{ ...getFieldProps("password") }}
          />
          <TextField
            label="Powtórz hasło"
            required={true}
            inputProps={{ ...getFieldProps("repeatPassword") }}
          />
        </div>
        <h3 className="uppercase">adres i informacje o gospodarstwie</h3>
        <TextField
          label="Nazwa gospodarstwa"
          required={true}
          inputProps={{ ...getFieldProps("farmName") }}
        />
        <TextAreaField
          className="h-[108px]"
          label="Opis gospodarstwa"
          textAreaProps={{...getFieldProps("farmDesc")}}
        />
        <div className="grid grid-cols-3 gap-x-[15px] gap-y-[34px]">
          <TextField
            label="Ulica"
            required={true}
            inputProps={{ ...getFieldProps("street") }}
          />
          <TextField
            label="Numer domu"
            required={true}
            inputProps={{ ...getFieldProps("streetNumber") }}
          />
          <TextField
            label="Numer mieszkania"
            inputProps={{ ...getFieldProps("flatNumber") }}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-[15px] gap-y-[34px]">
          <TextField
            label="Miasto/wieś"
            required={true}
            inputProps={{ ...getFieldProps("city") }}
          />
          <TextField
            label="Kod pocztowy"
            required={true}
            inputProps={{ ...getFieldProps("postCode") }}
          />
          <TextField
            label="Województwo"
            required={true}
            inputProps={{ ...getFieldProps("voivodeship") }}
          />
          <TextField
            label="Powiat"
            required={true}
            inputProps={{ ...getFieldProps("county") }}
          />
          <TextField
            label="Gmina"
            required={true}
            inputProps={{ ...getFieldProps("district") }}
          />
        </div>
        <div className="flex justify-start flex-row-reverse gap-[16px]">
          <Button variant="contained" type="submit" onClick={() => {}}>
            Zapisz
          </Button>
          <Button variant="text" type="reset" onClick={() => {}}>
            Reset
          </Button>
        </div>
      </form>
    </Content>
  );
};
