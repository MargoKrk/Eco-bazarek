import { UserProfile } from "../../../data/types";
import { TextAreaField, TextField } from "../../../components";
import { Button } from "../../../components/Button";
import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { InputProps } from "../../../components/TextField";
import { TextAreaProps } from "../../../components/TextAreaField";

export interface FarmDataProps {
  user: UserProfile;
  token: string | null;
  updateUser: (data: UserProfile) => void;
}

export const FarmData = (props: FarmDataProps) => {
  const [formData, setFormData] = useState<UserProfile>(
    structuredClone(props.user)
  );
  const { profile } = useContext(UserContext);
  console.log(profile)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.target)

  }

  // const showData = (
  //   obj: UserProfile, key: keyof UserProfile
  //   ) => ({
  //     value: obj[key],
  // })

  const getFieldProps = (
    key: keyof UserProfile
  ): InputProps & TextAreaProps => ({
    name: key
  });

  return (
    <>
      <form
        className="flex flex-col w-[690px] mb-[113px]"
        onSubmit={handleSubmit}
        onReset={() => {}}
      >
        <div className="grid grid-rows-2 grid-cols-2 gap-x-[15px] gap-y-[34px]">
          <TextField
            label="Imię"
            required={true}
            inputProps={{ ...getFieldProps("firstName"), type: "text" }}  
                    />
          <TextField
            label="Nazwisko"
            required={true}
            inputProps={{
              ...getFieldProps("lastName"), type: "text"
            }}
          />
          <TextField
            label="Email"
            required={true}
            inputProps={{
              ...getFieldProps("email"), type: "email"
            }}
          />
          <TextField
            label="Telefon"
            required={true}
            inputProps={{
              ...getFieldProps("phone"), type: "text"
            }}
          />
        </div>
        <h3 className="uppercase my-[35px]">
          adres i informacje o gospodarstwie
        </h3>
        <div className="grid gap-y-[34px]">
          <TextField
            label="Nazwa gospodarstwa"
            required={true}
            inputProps={{
              ...getFieldProps("farmName"), type: "text"
            }}
          />
          <TextAreaField className="h-[108px]" label="Opis gospodarstwa" />
        </div>
        <div className="grid grid-cols-3 grid-row-1 gap-x-[15px] my-[34px]">
          <TextField
            label="Ulica"
            required={true}
            inputProps={{
              ...getFieldProps("street"), type: "text"
            }}
          />
          <TextField
            label="Numer domu"
            required={true}
            inputProps={{
              ...getFieldProps("streetNumber"), type: "text"
            }}
          />
          <TextField
            label="Numer mieszkania"
            inputProps={{
              ...getFieldProps("flatNumber"), type: "text"
            }}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-[15px] gap-y-[34px]">
          <TextField
            label="Miasto/wieś"
            required={true}
            inputProps={{
              ...getFieldProps("city"), type: "text"
            }}
          />
          <TextField
            label="Kod pocztowy"
            required={true}
            inputProps={{
              ...getFieldProps("postCode"), type: "text"
            }}
          />
          <TextField
            label="Województwo"
            required={true}
            inputProps={{
              ...getFieldProps("voivodeship"), type: "text"
            }}
          />
          <TextField
            label="Powiat"
            required={true}
            inputProps={{
              ...getFieldProps("country"), type: "text"
            }}
          />
          <TextField
            label="Gmina"
            required={true}
            inputProps={{
              ...getFieldProps("county"), type: "text"
            }}
          />
        </div>
        <div className="flex justify-start flex-row-reverse gap-[16px]">
          <Button variant="contained" type="submit">
            Zapisz
          </Button>
          <Button variant="text" type="reset">
            Reset
          </Button>
        </div>
      </form>
    </>
  );
};
