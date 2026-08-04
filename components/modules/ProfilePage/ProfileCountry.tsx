import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/profile/index.module.scss";

const ProfileCountry = ({
  register,
  errors,
  country,
  setCountry,
}: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.country
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
        }
        type="text"
        value={country}
        placeholder="Країна"
        autoComplete="off"
        {...register("country", {
          required: "Введіть країну!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            setCountry && setCountry(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default ProfileCountry;
