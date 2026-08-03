import { IAuthInput } from "@/types/authPopup";

const RepeatPasswordInput = ({ register, errors, repeatPassword, setRepeatPassword }: IAuthInput) => {
  return (
    <div className="form__block">
      <input 
        className={
          errors.repeatPassword
            ? "form__block__input form__block__input_error"
            : "form__block__input"
        }
        type="password" 
        value={repeatPassword}
        placeholder="Повторіть пароль" 
        autoComplete="off"
        {...register("repeatPassword", {
          required: "Введіть пароль!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            if (setRepeatPassword) {
              setRepeatPassword(e.target.value);
            }
          },
        })}
      />
    </div>
  );
};

export default RepeatPasswordInput;
