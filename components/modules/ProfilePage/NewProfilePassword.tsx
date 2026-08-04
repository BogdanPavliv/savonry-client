import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/profile/index.module.scss";

const NewProfilePassword = ({
  register,
  errors,
  newPassword,
  setNewPassword,
}: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.newPassword
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
        }
        type="text"
        value={newPassword}
        placeholder="Новий пароль"
        autoComplete="off"
        {...register("newPassword", {
          required: "Введіть новий пароль!",
          minLength: 4,
          maxLength: 40,
          onChange: (e) => {
            setNewPassword && setNewPassword(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default NewProfilePassword;
