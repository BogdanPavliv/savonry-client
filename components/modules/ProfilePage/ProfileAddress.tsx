import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/profile/index.module.scss";

const ProfileAddress = ({ register, errors, address, setAddress }: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.address
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
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

export default ProfileAddress;
