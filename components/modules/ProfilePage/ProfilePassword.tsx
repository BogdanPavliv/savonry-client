import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/profile/index.module.scss";

const ProfilePassword = ({
  register,
  errors,
  password,
  setPassword,
}: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.password
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
        }
        type="text"
        value={password}
        placeholder="Старий пароль"
        autoComplete="off"
        {...register("password", {
          required: "Введіть пароль!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            if (setPassword) {
              setPassword(e.target.value);
            }
          },
        })}
      />
    </div>
  );
};

export default ProfilePassword;
