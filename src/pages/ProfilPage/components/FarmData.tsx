import { UserProfile } from "../../../data/types";
import { TextAreaField, TextField } from "../../../components";
import { Button } from "../../../components/Button";

export interface FarmDataProps {
  user: UserProfile;
  token: string;
}

export const FarmData = () => {
  return (
    <>
      <form
        className="flex flex-col w-[690px] mb-[113px]"
        onSubmit={() => {}}
        onReset={() => {}}
      >
        <div className="grid grid-rows-2 grid-cols-2 gap-x-[15px] gap-y-[34px]">
          <TextField label="Imię" required={true} />
          <TextField label="Nazwisko" required={true} />
          <TextField label="Email" required={true} />
          <TextField label="Telefon" required={true} />
        </div>
        <h3 className="uppercase my-[35px]">
          adres i informacje o gospodarstwie
        </h3>
        <div className="grid gap-y-[34px]">
          <TextField label="Nazwa gospodarstwa" required={true} />
          <TextAreaField className="h-[108px]" label="Opis gospodarstwa" />
        </div>
        <div className="grid grid-cols-3 grid-row-1 gap-x-[15px] my-[34px]">
          <TextField label="Ulica" required={true} />
          <TextField label="Numer domu" required={true} />
          <TextField label="Numer mieszkania" />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-[15px] gap-y-[34px]">
          <TextField label="Miasto/wieś" required={true} />
          <TextField label="Kod pocztowy" required={true} />
          <TextField label="Województwo" required={true} />
          <TextField label="Powiat" required={true} />
          <TextField label="Gmina" required={true} />
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
