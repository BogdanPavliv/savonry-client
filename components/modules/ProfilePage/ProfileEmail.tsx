import { IAuthInput } from "@/types/authPopup";
import { emailValidationRules } from "@/lib/utils/auth";
import styles from "@/styles/profile/index.module.scss";

const ProfileEmail = ({ register, errors, email, setEmail }: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.email
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
        }
        type="text"
        value={email}
        placeholder="mail@mail.com"
        autoComplete="off"
        {...register("email", {
          ...emailValidationRules("Неправильний Email!", "Введіть email!"),
          onChange: (e) => {
            setEmail && setEmail(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default ProfileEmail;
