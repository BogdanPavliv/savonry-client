import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/cart-page/index.module.scss";

const AddressInput = ({ register, errors, address, setAddress }: IAuthInput) => {
  return (
    <div className={styles.cart__form__block}>
      <input
        className={
          errors.address
            ? `${styles.cart__form__block__input} ${styles.cart__form__block__input_error}`
            : `${styles.cart__form__block__input}`
        }
        type="text"
        value={address}
        placeholder="Адреса"
        autoComplete="off"
        {...register("address", {
          required: "Введіть адресу!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            setAddress && setAddress(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default AddressInput;
