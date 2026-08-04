import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/profile/index.module.scss";

const RepeatNewProfilePassword = ({
  register,
  errors,
  repeatNewPassword,
  setRepeatNewPassword,
}: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.repeatNewPassword
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
        }
        type="text"
        value={repeatNewPassword}
        placeholder="Підтвердіть новий пароль"
        autoComplete="off"
        {...register("repeatNewPassword", {
          required: "Введіть підтвердження нового паролю!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            setRepeatNewPassword && setRepeatNewPassword(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default RepeatNewProfilePassword;
