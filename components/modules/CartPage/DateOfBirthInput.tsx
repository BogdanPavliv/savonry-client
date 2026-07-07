import { IAuthInput } from "@/types/authPopup";
import { surnameValidationRules } from "@/lib/utils/auth";
import styles from "@/styles/cart-page/index.module.scss";

const DateOfBirthInput = ({ register, errors, dateOfBirth, setDateOfBirth,}: IAuthInput) => {
  return (
    <div className={styles.cart__form__block}>
      <input
        className={
          errors.dateOfBirth
            ? `${styles.cart__form__block__input} ${styles.cart__form__block__input_error}`
            : `${styles.cart__form__block__input}`
        }
        type="text"
        value={dateOfBirth}
        placeholder="Дата народження"
        autoComplete="off"
        {...register("dateOfBirth", {
          required: "Введіть дату народження!",
          minLength: 10,
          maxLength: 10,
          onChange: (e) => {
            setDateOfBirth && setDateOfBirth(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default DateOfBirthInput;
