import styles from "@/styles/contacts/index.module.scss";
import { IAuthInput } from "@/types/authPopup";

const ContactsCommentTextArea = ({ register, errors, comment, setComment }: IAuthInput) => {
  return (
    <div className={styles.contacts__form__block}>
      <textarea
        className={
          errors.comment
            ? `${styles.contacts__form__block__textarea} ${styles.contacts__form__block__textarea_error}`
            : `${styles.contacts__form__block__textarea}`
        }
        value={comment}
        placeholder="Коментар до замовлення"
        autoComplete="off"
        {...register("comment", {
          required: "Введіть коментар!",
          minLength: 2,
          maxLength: 300,
          onChange: (e) => {
           setComment && setComment(e.target.value);
          },
        })}
      />
    </div>
  )
}

export default ContactsCommentTextArea;