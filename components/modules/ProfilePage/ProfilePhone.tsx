import { IAuthInput } from "@/types/authPopup";
import { phoneValidationRules } from "@/lib/utils/auth";
import styles from "@/styles/profile/index.module.scss";

const ProfilePhone = ({ register, errors, phone, setPhone }: IAuthInput) => {
  return (
    <div className={styles.profile__info}>
      <input
        className={
          errors.phone
            ? `${styles.profile__info__input} ${styles.profile__info__input_error}`
            : `${styles.profile__info__input}`
        }
        type="text"
        value={phone}
        placeholder="+38 (050) 555-55-55"
        autoComplete="off"
        {...register("phone", {
          ...phoneValidationRules(
            "Неправильний формат телефону!",
            "Введіть телефон!"
          ),
          onChange: (e) => {
            setPhone && setPhone(e.target.value);
          },
        })}
      />
    </div>
  );
};

export default ProfilePhone;
