import styles from "@/styles/contacts/index.module.scss";
import { IAuthInput } from "@/types/authPopup";
import { emailValidationRules } from "@/lib/utils/auth";

const ContactsEmailInput = ({ register, errors, email, setEmail }: IAuthInput) => {
  return (
    <div className={styles.contacts__form__block}>
      <input
        className={
          errors.email
            ? `${styles.contacts__form__block__input} ${styles.contacts__form__block__input_error}`
            : `${styles.contacts__form__block__input}`
        }
        type="text"
        value={email}
        placeholder="E-mail"
        autoComplete="off"
        {...register(
          'email',
          {
            ...emailValidationRules("Неправильний Email!","Введіть email!"),
            onChange: (e) => {
              if (setEmail) {
                setEmail(e.target.value);
              }
            }
          }
        )}
      />
    </div>
  )
}

export default ContactsEmailInput