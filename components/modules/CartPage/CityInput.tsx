import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/cart-page/index.module.scss";

const CityInput = ({ register, errors, city, setCity }: IAuthInput) => {
  return (
    <div className={styles.cart__form__block}>
      <input
        className={
          errors.city
            ? `${styles.cart__form__block__input} ${styles.cart__form__block__input_error}`
            : `${styles.cart__form__block__input}`
        }
        type="text"
        value={city}
        placeholder="Місто"
        autoComplete="off"
        {...register("city", {
          required: "Введіть місто!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            setCity && setCity(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default CityInput;
