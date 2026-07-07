import { IAuthInput } from "@/types/authPopup";
import { nameValidationRules } from "@/lib/utils/auth";

const NameInput = ({ register, errors, username, setUsername }: IAuthInput) => {
  return (
    <div className="form__block">
      <input
        className={
          errors.username
            ? "form__block__input form__block__input_error"
            : "form__block__input"
        }
        type="text"
        value={username}
        placeholder="Ім'я"
        autoComplete="off"
        {...register(
          "username",
          {
            ...nameValidationRules("Неприпустиме значення!", "Введіть ім'я!"),
            onChange: (e) => {
              setUsername && setUsername(e.target.value);
            }
          }
        )}
      />
    </div>
  );
};

export default NameInput;
