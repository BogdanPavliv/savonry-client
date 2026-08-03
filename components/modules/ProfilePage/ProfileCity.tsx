import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/profile/index.module.scss";

const ProfileCity = ({ register, errors, city, setCity }: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.city
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
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
            if (setCity) {
              setCity(e.target.value);
            }
          },
        })}
      />
    </div>
  );
};

export default ProfileCity;
