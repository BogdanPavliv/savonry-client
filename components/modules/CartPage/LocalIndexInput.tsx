import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/cart-page/index.module.scss";

const LocalIndexInput = ({ register, errors, localIndex, setLocalIndex }: IAuthInput) => {
  return (
    <div className={styles.cart__form__block}>
      <input
        className={
          errors.localIndex
            ? `${styles.cart__form__block__input} ${styles.cart__form__block__input_error}`
            : `${styles.cart__form__block__input}`
        }
        type="text"
        value={localIndex}
        placeholder="Індекс"
        autoComplete="off"
        {...register("localIndex", {
          required: "Введіть індекс!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            if (setLocalIndex) {
              setLocalIndex(e.target.value);
            }
          },
        })}
      />
    </div>
  );
};

export default LocalIndexInput;
