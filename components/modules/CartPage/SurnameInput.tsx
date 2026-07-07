import { IAuthInput } from "@/types/authPopup";
import { surnameValidationRules } from "@/lib/utils/auth";
import styles from "@/styles/cart-page/index.module.scss";

const SurnameInput = ({
  register,
  errors,
  surname,
  setSurname,
}: IAuthInput) => {
  return (
    <div className={styles.cart__form__block}>
      <input
        className={
          errors.surname
            ? `${styles.cart__form__block__input} ${styles.cart__form__block__input_error}`
            : `${styles.cart__form__block__input}`
        }
        type="text"
        value={surname}
        placeholder="Прізвище"
        autoComplete="off"
        {...register("surname", {
          minLength: 2,
          maxLength: 15,
          onChange: (e) => {
            setSurname && setSurname(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default SurnameInput;
