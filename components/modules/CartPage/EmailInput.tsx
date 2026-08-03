import { IAuthInput } from "@/types/authPopup";
import { emailValidationRules } from "@/lib/utils/auth";
import styles from "@/styles/cart-page/index.module.scss";

const EmailInput = ({ register, errors, email, setEmail }: IAuthInput) => {
  return (
    <div className={styles.cart__form__block}>
      <input
        className={
          errors.email
            ? `${styles.cart__form__block__input} ${styles.cart__form__block__input_error}`
            : `${styles.cart__form__block__input}`
        }
        type="text"
        value={email}
        placeholder="E-mail"
        autoComplete="off"
        {...register("email", {
          ...emailValidationRules("Неправильний Email!", "Введіть email!"),
          onChange: (e) => {
            if (setEmail) {
              setEmail(e.target.value);
            }
          },
        })}
      />
    </div>
  );
};

export default EmailInput;
