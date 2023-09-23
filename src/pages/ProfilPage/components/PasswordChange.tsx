import { FormEvent, useState } from "react";
import { PasswordValidator, TextField } from "../../../components";
import { Button } from "../../../components/Button";
import { changePassword } from "../../../../data/baseAPI";
import { toast } from "react-toastify";

export interface PasswordChangeProps {
  token: string | null;
}

export const PasswordChange = (props: PasswordChangeProps) => {
  const { token } = props;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    if(newPassword === repeatNewPassword) {
      try {
        // await changePassword
        toast("Hasło zostało zmienione")
      } catch (err) {
        toast("Nie udało się zmienić hasła", {type: "error"})
      }
  
    } else {
      toast("Nie udało się zmienić hasła", {type: "error"})
    }


  };

  return (
    <>
      <form className="grid w-[515px]" onSubmit={handleSubmit}>
        <div className="grid grid-rows-3 gap-y-[34px]">
          <TextField
            label="Stare hasło"
            required={true}
            inputProps={{
              type: "password",
              value: oldPassword,
              onChange: (e) => setOldPassword(e.target.value),
            }}
          />
          <TextField
            label="Nowe hasło"
            required={true}
            inputProps={{
              type: "password",
              value: newPassword,
              onChange: (e) => setNewPassword(e.target.value),
            }}
          />
          <TextField
            label="Powtórz nowe hasło"
            required={true}
            inputProps={{
              type: "password",
              value: repeatNewPassword,
              onChange: (e) => setRepeatNewPassword(e.target.value),
            }}
          />
        </div>
        <PasswordValidator className="mt-6" password={newPassword} />

        <div className="flex justify-end mt-[42px]">
          <Button variant="contained" type="submit">
            Zmień hasło
          </Button>
        </div>
      </form>
    </>
  );
};
