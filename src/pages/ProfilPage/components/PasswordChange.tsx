import { FormEvent, useEffect, useState } from "react";
import { PasswordValidator, TextField } from "../../../components";
import { Button } from "../../../components/Button";
// import { changePassword } from "../../../data/baseAPI";
import { toast } from "react-toastify";
import { useAPI } from "../../../data/useAPI";

// export interface PasswordChangeProps {
//   token: string;
// }

export const PasswordChange = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [samePassword, setSamePassword] = useState(true);
  const { changePassword } = useAPI();


  // const [token, setToken] = useState("")

  // useEffect(() => {
  //   let readFromLocalStorage = localStorage["userLogin"]
  //   let parseLocalStorage = JSON.parse(readFromLocalStorage)
  //   setToken(JSON.stringify(parseLocalStorage.token))
  //   console.log()
  // }, [])

  // console.log(token);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newPassword || !repeatNewPassword || samePassword === false) {
      toast("Wypełnij poprawnie wszystkie pola", { type: "error" });
    } else {
      try {
        const data = await changePassword(oldPassword, newPassword);
        console.log(oldPassword, newPassword);

        if (data.status !== 200) {
          toast("Nie udało się zmienić hasła", { type: "error" });
          console.log("status błąd")
        } else {
          toast("Hasło zostało zmienione", { type: "success" });
        }
      } catch (err) {
        toast("Nie udało się zmienić hasła", { type: "error" });
        console.log(err)
      }
    }
  };

  return (
    <>
      <form className="grid w-[515px]" onSubmit={handleSubmit}>
        <div className="grid grid-rows-3 gap-y-[34px]">
          <TextField
            label="Stare hasło"
            required={true}
            password={true}
            type="password"
            inputProps={{
              value: oldPassword,
              onChange: (e) => setOldPassword(e.target.value),
            }}
          />

          <TextField
            label="Nowe hasło"
            required={true}
            password={true}
            type={"password"}
            inputProps={{
              value: newPassword,
              onChange: (e) => setNewPassword(e.target.value),
            }}
          />
          <TextField
            label="Powtórz nowe hasło"
            required={true}
            password={true}
            type={"password"}
            error={!samePassword}
            helperText={!samePassword ? "Hasła muszą być takie same" : ""}
            inputProps={{
              value: repeatNewPassword,
              onChange: (e) => {
                setRepeatNewPassword(e.target.value), setSamePassword(true);
              },
              onBlur: () => setSamePassword(newPassword === repeatNewPassword),
            }}
          />
        </div>
        <PasswordValidator className="mt-6" password={newPassword} />

        <div className="flex justify-end mt-[42px]">
          <Button variant="contained" type="submit" disabled={!samePassword}>
            Zmień hasło
          </Button>
        </div>
      </form>
    </>
  );
};
