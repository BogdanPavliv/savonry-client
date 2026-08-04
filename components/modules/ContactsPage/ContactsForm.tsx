import { useState } from "react";
import styles from "@/styles/contacts/index.module.scss";
import { useAuthForm } from "@/hooks/useAuthForm";
import ContactsNameInput from "./ContactsNameInput";
import ContactsEmailInput from "./ContactsEmailInput";
import ContactsPhoneInput from "./ContactsPhoneInput";
import ContactsCommentTextArea from "./ContactsCommentTextArea";

const ContactsForm = () => {
  const { register, errors, handleSubmit } = useAuthForm();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const submitForm = () => {
    try {
      setUsername("");
      setEmail("");
      setPhone("");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.contacts__form__wrapper}>
      <form
        className={styles.contacts__form}
        onSubmit={handleSubmit(submitForm)}
      >
        <h2 className={styles.contacts__form__title}>Напишіть нам</h2>
        <div className={styles.contacts__form__inputs}>
          <ContactsNameInput
            register={register}
            errors={errors}
            username={username}
            setUsername={setUsername}
          />
          <ContactsEmailInput
            register={register}
            errors={errors}
            email={email}
            setEmail={setEmail}
          />
          <ContactsPhoneInput
            register={register}
            errors={errors}
            phone={phone}
            setPhone={setPhone}
          />
        </div>
        <ContactsCommentTextArea
          register={register}
          errors={errors}
          comment={comment}
          setComment={setComment}
        />
        <div className={styles.contacts__btn_wrapper}>
          <button className={styles.contacts__btn} type="submit">
            Надіслати
          </button>
          <p className={styles.contacts__form__consent}>
            Натискаючи продовжити я даю свою згоду на{" "}
            <a className={styles.contacts__form__link} href="#">
              обробку персональних даних 
            </a>{" "}
            відповідно до{" "}
            <a className={styles.contacts__form__link} href="#">
              Політики конфіденційності
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactsForm;
