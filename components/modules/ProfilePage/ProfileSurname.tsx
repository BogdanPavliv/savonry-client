import { IAuthInput } from "@/types/authPopup";
import { surnameValidationRules } from "@/lib/utils/auth";
import styles from "@/styles/profile/index.module.scss";

const ProfileSurname = ({
  register,
  errors,
  surname,
  setSurname,
}: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.surname
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
        }
        type="text"
        value={surname}
        placeholder="Прізвище"
        autoComplete="off"
        {...register("surname", {
          ...surnameValidationRules("Неприпустиме значення!", "Введіть ім'я!"),
          onChange: (e) => {
            setSurname && setSurname(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default ProfileSurname;
