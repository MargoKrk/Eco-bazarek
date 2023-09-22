import { TextField } from "../../../components";
import { Button } from "../../../components/Button";

export const PasswordChange = () => {
  return (
    <>
      <form className="grid w-[515px]">
        <div className="grid grid-rows-3 gap-y-[34px]">
          <TextField label="Stare hasło" required={true} />
          <TextField label="Nowe hasło" required={true} />
          <TextField label="Powtórz nowe hasło" required={true} />
        </div>
        <div className="flex justify-end mt-[42px]">
          <Button variant="contained" type="submit">
            Zmień hasło
          </Button>
        </div>
      </form>
    </>
  );
};
