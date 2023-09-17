import { Content, TextAreaField, TextField } from "../components";
import { Button } from "../components/Button";

export const RegistrationPage = () => {

  return (
    <Content title="Produkty">
      <form className="flex flex-col w-[690px] gap-y-[34px] mb-[113px]">
        <div className="grid grid-rows-3 grid-cols-2 gap-x-[15px] gap-y-[34px]">
          <TextField
            type="text"
            value="firstName"
            label="Imię"
            required={true}
          />
          <TextField
            type="text"
            value="lastName"
            label="Nazwisko"
            required={true}
          />
          <TextField type="text" value="email" label="Email" required={true} />
          <TextField
            type="text"
            value="phone"
            label="Telefon"
            required={true}
          />
          <TextField
            type="text"
            value="password"
            label="Hasło"
            required={true}
          />
          <TextField
            type="text"
            value="repeatPassword"
            label="Powtórz hasło"
            required={true}
          />
        </div>
        <h3 className="uppercase">adres i informacje o gospodarstwie</h3>
        <TextField
          type="text"
          value="farmName"
          label="Nazwa gospodarstwa"
          required={true}
        />
        <TextAreaField
          className="h-[108px]"
          label="Opis gospodarstwa"
          value="farmDescribe"
        />
        <div className="grid grid-cols-3 gap-x-[15px] gap-y-[34px]">
          <TextField type="text" value="street" label="Ulica" required={true} />
          <TextField
            type="text"
            value="houseNumber"
            label="Numer domu"
            required={true}
          />
          <TextField type="text" value="flatNumber" label="Numer mieszkania" />
        </div>
        <div className="grid grid-cols-2 gap-x-[15px] gap-y-[34px]">
          <TextField
            type="text"
            value="town"
            label="Miasto/wieś"
            required={true}
          />
          <TextField
            type="text"
            value="zipCode"
            label="Kod pocztowy"
            required={true}
          />
          <TextField
            type="text"
            value="voivodeship"
            label="Województwo"
            required={true}
          />
          <TextField
            type="text"
            value="county"
            label="Powiat"
            required={true}
          />
          <TextField
            type="text"
            value="commune"
            label="Gmina"
            required={true}
          />
        </div>
        <div className="flex justify-end gap-[16px]">
          <Button className="" variant="text" onClick={() => {}}>
            Reset
          </Button>
          <Button className="" variant="contained" onClick={() => {}}>
            Zapisz
          </Button>
        </div>
      </form>
    </Content>
  );
};
