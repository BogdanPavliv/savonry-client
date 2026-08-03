import { IAuthInput } from "@/types/authPopup";
import { surnameValidationRules } from "@/lib/utils/auth";

const SurnameInput = ({ register, errors, surname, setSurname }: IAuthInput) => {
  return (
    <div className="form__block">
      <input
        className={
          errors.surname
            ? "form__block__input form__block__input_error"
            : "form__block__input"
        }
        type="text"
        value={surname}
        placeholder="Прізвище"
        autoComplete="off"
        {...register(
          "surname",
          {
            ...surnameValidationRules("Неприпустиме значення!", "Введіть прізвище!"),
            onChange: (e) => {
              if (setSurname) {
                setSurname(e.target.value);
              }
            },
          }
        )}
      />
    </div>
  );
};

export default SurnameInput;
