import { Content, TextAreaField, TextField } from "../../components";
import { Button } from "../../components/Button";
import { useRegistrationForm } from "./useRegistrationForm";

export const RegistrationPage = () => {
  const {
    getFieldProps,
    handleSubmit,
    handleReset,
    getTextFieldProps,
  } = useRegistrationForm();


  return (
    <Content title="Produkty">
      <h1 className="uppercase mt-[72px] mb-[34px]">rejestracja</h1>
        <form
          className="flex flex-col w-[690px] gap-y-[34px] mb-[113px]"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <div className="grid grid-rows-3 grid-cols-2 gap-x-[15px] gap-y-[34px]">
            <TextField
              label="Imię"
              required={true}
              {...getTextFieldProps("firstName")}
              inputProps={{ ...getFieldProps("firstName") }}
            />
            <TextField
              label="Nazwisko"
              required={true}
              {...getTextFieldProps("lastName")}
              inputProps={{ ...getFieldProps("lastName") }}
            />
            <TextField
              label="Email"
              required={true}
              {...getTextFieldProps("email")}
              inputProps={{ ...getFieldProps("email"), type: "email" }}
            />
            <TextField
              label="Telefon"
              required={true}
              {...getTextFieldProps("phone")}
              inputProps={{ ...getFieldProps("phone") }}
            />
            <TextField
              label="Hasło"
              required={true}
              {...getTextFieldProps("password")}
              inputProps={{ ...getFieldProps("password"), type: "password" }}
            />
            <TextField
              label="Powtórz hasło"
              required={true}
              {...getTextFieldProps("repeatPassword")}
              inputProps={{
                ...getFieldProps("repeatPassword"),
                type: "password",
              }}
            />
          </div>
          <h3 className="uppercase">adres i informacje o gospodarstwie</h3>
          <TextField
            label="Nazwa gospodarstwa"
            required={true}
            {...getTextFieldProps("farmName")}
            inputProps={{ ...getFieldProps("farmName") }}
          />
          <TextAreaField
            className="h-[108px]"
            label="Opis gospodarstwa"
            textAreaProps={{ ...getFieldProps("farmDesc") }}
          />
          <div className="grid grid-cols-3 gap-x-[15px] gap-y-[34px]">
            <TextField
              label="Ulica"
              required={true}
              {...getTextFieldProps("street")}
              inputProps={{ ...getFieldProps("street") }}
            />
            <TextField
              label="Numer domu"
              required={true}
              {...getTextFieldProps("streetNumber")}
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
              {...getTextFieldProps("city")}
              inputProps={{ ...getFieldProps("city") }}
            />
            <TextField
              label="Kod pocztowy"
              required={true}
              {...getTextFieldProps("postCode")}
              inputProps={{ ...getFieldProps("postCode") }}
            />
            <TextField
              label="Województwo"
              required={true}
              {...getTextFieldProps("voivodeship")}
              inputProps={{ ...getFieldProps("voivodeship") }}
            />
            <TextField
              label="Powiat"
              required={true}
              {...getTextFieldProps("country")}
              inputProps={{ ...getFieldProps("country") }}
            />
            <TextField
              label="Gmina"
              required={true}
              {...getTextFieldProps("county")}
              inputProps={{ ...getFieldProps("county") }}
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
    </Content>
  );
};
