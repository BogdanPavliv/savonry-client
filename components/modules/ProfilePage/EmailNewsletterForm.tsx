import styles from "@/styles/profile/index.module.scss";

const EmailNewsletterForm = () => {
  return (
    <form className={styles.profile__email_newsletter_form}>
      <h2 className={styles.profile__email_newsletter__title}>
        E-mail розсилка
      </h2>
      <p className={styles.profile__email_newsletter__text}>
        Чи хочете ви отримувати розсилку про новинки, акції та нові надходження
        на ваш E-mail?
      </p>
      <div className={styles.profile__email_newsletter__radio_btns}>
        <div className={styles.profile__email_newsletter__radio_btn}>
          <input
            id="newsletter_yes"
            className={styles.profile__email_newsletter__radio_btn_input}
            type="radio"
            name="newsletter"
            value="yes"
            defaultChecked
          />
          <label htmlFor="newsletter_yes" className={styles.profile__email_newsletter__label}></label>
          <p className={styles.profile__email_newsletter__radio_btn_input_text}>Так</p>
        </div>
        <div className={styles.profile__email_newsletter__radio_btn}>
          <input
            id="newsletter_no"
            className={styles.profile__email_newsletter__radio_btn_input}
            type="radio"
            name="newsletter"
            value="no"
          />
          <label htmlFor="newsletter_no" className={styles.profile__email_newsletter__label}></label>
          <p className={styles.profile__email_newsletter__radio_btn_input_text}>Ні</p>
        </div>
      </div>
      <div className={styles.profile__btn_wrapper}>
        <button type="submit" className={styles.profile__btn}>
          Зберегти зміни
        </button>
      </div>
    </form>
  );
};

export default EmailNewsletterForm;
