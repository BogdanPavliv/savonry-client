import { IAuthInput } from "@/types/authPopup";
import { emailValidationRules } from "@/lib/utils/auth";

const EmailInput = ({ register, errors, email, setEmail }: IAuthInput) => {
  return (
    <div className="form__block">
      <input
        className={
          errors.email
            ? "form__block__input form__block__input_error"
            : "form__block__input"
        }
        type="text"
        value={email}
        placeholder="E-mail"
        autoComplete="off"
        {...register(
          'email',
          {
            ...emailValidationRules("Неправильний Email!","Введіть email!"),
            onChange: (e) => {
              setEmail && setEmail(e.target.value);
            }
          }
        )}
      />
    </div>
  );
};

export default EmailInput;
