import { IAuthInput } from "@/types/authPopup";

const PasswordInput = ({
  register,
  errors,
  password,
  setPassword,
}: IAuthInput) => {
  return (
    <div className="form__block">
      <input
        className={
          errors.password
            ? "form__block__input form__block__input_error"
            : "form__block__input"
        }
        type="password"
        value={password}
        placeholder="Пароль"
        autoComplete="off"
        {...register("password", {
          required: "Введіть пароль!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            if (setPassword) {
              setPassword(e.target.value);
            }
          },
        })}
      />
    </div>
  );
};

export default PasswordInput;
