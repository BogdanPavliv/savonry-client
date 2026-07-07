import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/cart-page/index.module.scss";

const CommentTextArea = ({ register, errors, comment, setComment }: IAuthInput) => {
  return (
    <div className={styles.cart__form__block}>
      <textarea
        className={
          errors.comment
            ? `${styles.cart__form__block__textarea} ${styles.cart__form__block__textarea_error}`
            : `${styles.cart__form__block__textarea}`
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
  );
};

export default CommentTextArea;
