import { IAuthInput } from "@/types/authPopup";
import { phoneValidationRules } from "@/lib/utils/auth";

const PhoneInput = ({ register, errors, phone, setPhone }: IAuthInput) => {
  return (
    <div className="form__block">
      <input
        className={
          errors.phone
            ? "form__block__input form__block__input_error"
            : "form__block__input"
        }
        type="text"
        value={phone}
        placeholder="+38 (050) 555-55-55"
        autoComplete="off"
        {...register(
          "phone",
          {
            ...phoneValidationRules("Неправильний формат телефону!", "Введіть телефон!"),
            onChange: (e) => {
              setPhone && setPhone(e.target.value);
            }
          }
        )}
      />
    </div>
  );
};

export default PhoneInput;
