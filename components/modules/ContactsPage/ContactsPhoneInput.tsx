import styles from "@/styles/contacts/index.module.scss";
import { IAuthInput } from "@/types/authPopup";
import { phoneValidationRules } from "@/lib/utils/auth";

const ContactsPhoneInput = ({ register, errors, phone, setPhone }: IAuthInput) => {
  return (
    <div className={styles.contacts__form__block}>
      <input
        className={
          errors.phone
            ? `${styles.contacts__form__block__input} ${styles.contacts__form__block__input_error}`
            : `${styles.contacts__form__block__input}`
        }
        type="text"
        value={phone}
        placeholder="Телефон"
        autoComplete="off"
        {...register(
          "phone",
          {
            ...phoneValidationRules("Неправильний формат телефону!", "Введіть телефон!"),
            onChange: (e) => {
              if (setPhone) {
                setPhone(e.target.value);
              }
            },
          }
        )}
      />
    </div>
  )
}

export default ContactsPhoneInput;