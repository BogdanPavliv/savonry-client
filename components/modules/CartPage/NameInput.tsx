import { IAuthInput } from "@/types/authPopup";
import { nameValidationRules } from "@/lib/utils/auth";
import styles from "@/styles/cart-page/index.module.scss";

const NameInput = ({ register, errors, username, setUsername }: IAuthInput) => {
  return (
    <div className={styles.cart__form__block}>
      <input
        className={
          errors.username
            ? `${styles.cart__form__block__input} ${styles.cart__form__block__input_error}`
            : `${styles.cart__form__block__input}`
        }
        type="text"
        value={username}
        placeholder="Ім'я"
        autoComplete="off"
        {...register("username", {
          minLength: 2,
          maxLength: 15,
          onChange: (e) => {
            setUsername && setUsername(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default NameInput;
