import styles from "@/styles/main-page/index.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.banner__inner}>
          <h4 className={styles.banner__title}>Дізнайтеся першими про наші акції, розіграші та новини</h4>
          <form className={styles.banner__form} action="#">
            <input className={styles.banner__input} id="banner__input" name="banner" type="text" placeholder='E-mail' />
            <button className={styles.banner__btn}>Підписатися</button>
          </form>
          <p className={styles.banner__text}>Натискаючи підписатися, ви погоджуєтесь на обробку персональних даних</p>
        </div>
      </div>
    </section>
  )
}

export default Banner