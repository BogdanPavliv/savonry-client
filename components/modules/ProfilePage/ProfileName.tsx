import { IAuthInput } from "@/types/authPopup";
import { nameValidationRules } from "@/lib/utils/auth";
import styles from "@/styles/profile/index.module.scss";

const ProfileName = ({
  register,
  errors,
  username,
  setUsername,
}: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.username
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
        }
        type="text"
        value={username}
        placeholder="Ім'я"
        autoComplete="off"
        {...register("username", {
          ...nameValidationRules("Неприпустиме значення!", "Введіть ім'я!"),
          onChange: (e) => {
            setUsername && setUsername(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default ProfileName;
