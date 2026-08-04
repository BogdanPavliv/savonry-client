import styles from "@/styles/contacts/index.module.scss";
import { IAuthInput } from "@/types/authPopup";
import { nameValidationRules } from "@/lib/utils/auth";

const ContactsNameInput = ({ register, errors, username, setUsername }: IAuthInput) => {
  return (
    <div className={styles.contacts__form__block}>
      <input
        className={
          errors.username
            ? `${styles.contacts__form__block__input} ${styles.contacts__form__block__input_error}`
            : `${styles.contacts__form__block__input}`
        }
        type="text"
        value={username}
        placeholder="Ім'я"
        autoComplete="off"
        {...register(
          "username",
          {
            ...nameValidationRules("Неприпустиме значення!", "Введіть ім'я!"),
            onChange: (e) => {
              if (setUsername) {
                setUsername(e.target.value);
              }
            }
          }
        )}
      />
    </div>
  )
}

export default ContactsNameInput;