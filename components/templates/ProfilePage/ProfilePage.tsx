"use client";
import styles from "@/styles/profile/index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useAuthForm } from "@/hooks/useAuthForm";
import { profileUser, changePassword } from "@/app/redux/features/auth/authSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { logout } from "@/app/redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IInputs } from "@/types/authPopup";
import Banner from "@/components/modules/Banner/Banner";
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs";
import { useCatalogBreadcrumbs } from "@/hooks/useCatalogBreadcrumbs";
import ProfileForm from "@/components/modules/ProfilePage/ProfileForm";
import ChangePasswordForm from "@/components/modules/ProfilePage/ChangePasswordForm";
import OrderHistoryForm from "@/components/modules/ProfilePage/OrderHistoryForm";
import EmailNewsletterForm from "@/components/modules/ProfilePage/EmailNewsletterForm";

const ProfilePage = () => {
  const [activeFormId, SetActiveFormId] = useState(1);

  const handleShowProfileForm = () => SetActiveFormId(1);
  const handleShowChangePasswordForm = () => SetActiveFormId(2);
  const handleShowOrderHistoryForm = () => SetActiveFormId(3);
  const handleShowEmailNewsletterForm = () => SetActiveFormId(4);

  const { user, status } = useSelector((state: RootState) => state.auth);
  const breadcrumbs = useCatalogBreadcrumbs();
  const { register, errors, handleSubmit } = useAuthForm();
  const dispatch = useDispatch<AppDispatch>();
  
  // Profile states
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  // Password states
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setSurname(user.surname || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
      setCountry(user.country || "");
      setCity(user.city || "");
    }
  }, [user]);

  // Показуємо toast з повідомленням статусу
  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const submitProfileForm = (data: IInputs) => {
    try {
      dispatch(
        profileUser({
          username: data.username,
          surname: data.surname,
          email: data.email,
          phone: data.phone,
          address: data.address,
          country: data.country,
          city: data.city,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const submitPasswordForm = (data: IInputs) => {
    try {
      dispatch(
        changePassword({
          password: data.password!,
          newPassword: data.newPassword!,
          repeatNewPassword: data.repeatNewPassword!,
        })
      ).unwrap().then(() => {
        // Очищаємо поля після успішної зміни
        setPassword("");
        setNewPassword("");
        setRepeatNewPassword("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Ви вийшли із системи.");
    router.push("/");
  };

  return (
    <main className="main">
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.profile}>
        <div className="container">
          <div className={styles.profile__inner}>
            <div className={styles.profile__left}>
              <h3 className={styles.profile__left__title}>
                {`Привіт, ${user?.username}`}
              </h3>
              <ul className={styles.profile__left__list}>
                <li className={styles.profile__left__item}>
                  <button
                    className={
                      activeFormId === 1
                        ? `${styles.profile__left__button} ${styles.profile__left__button_active} ${styles.user_profile}`
                        : `${styles.profile__left__button} ${styles.user_profile}`
                    }
                    type="button"
                    onClick={handleShowProfileForm}
                  >
                    Профіль
                  </button>
                </li>
                <li className={styles.profile__left__item}>
                  <button
                    className={
                      activeFormId === 2
                        ? `${styles.profile__left__button} ${styles.profile__left__button_active} ${styles.change_password}`
                        : `${styles.profile__left__button} ${styles.change_password}`
                    }
                    type="button"
                    onClick={handleShowChangePasswordForm}
                  >
                    Зміна паролю
                  </button>
                </li>
                <li className={styles.profile__left__item}>
                  <button
                    className={
                      activeFormId === 3
                        ? `${styles.profile__left__button} ${styles.profile__left__button_active} ${styles.order_history_btn}`
                        : `${styles.profile__left__button} ${styles.order_history_btn}`
                    }
                    type="button"
                    onClick={handleShowOrderHistoryForm}
                  >
                    Історія замовлень
                  </button>
                </li>
                <li className={styles.profile__left__item}>
                  <button
                    className={
                      activeFormId === 4
                        ? `${styles.profile__left__button} ${styles.profile__left__button_active} ${styles.email_newsletter}`
                        : `${styles.profile__left__button} ${styles.email_newsletter}`
                    }
                    type="button"
                    onClick={handleShowEmailNewsletterForm}
                  >
                    E-mail розсилка
                  </button>
                </li>
              </ul>
              <button
                className={styles.profile__logout}
                onClick={logoutHandler}
              >
                Вийти
              </button>
            </div>
            <div className={activeFormId === 3 ? `${styles.profile__right_order_history}` : styles.profile__right}>
              {activeFormId === 1 && (
                <ProfileForm
                  user={user}
                  register={register}
                  errors={errors}
                  username={username}
                  setUsername={setUsername}
                  surname={surname}
                  setSurname={setSurname}
                  email={email}
                  setEmail={setEmail}
                  phone={phone}
                  setPhone={setPhone}
                  address={address}
                  setAddress={setAddress}
                  country={country}
                  setCountry={setCountry}
                  city={city}
                  setCity={setCity}
                  onSubmit={submitProfileForm}
                  handleSubmit={handleSubmit}
                />
              )}
              {activeFormId === 2 && (
                <ChangePasswordForm
                  register={register}
                  errors={errors}
                  password={password}
                  setPassword={setPassword}
                  newPassword={newPassword}
                  setNewPassword={setNewPassword}
                  repeatNewPassword={repeatNewPassword}
                  setRepeatNewPassword={setRepeatNewPassword}
                  onSubmit={submitPasswordForm}
                  handleSubmit={handleSubmit}
                />
              )}
              {activeFormId === 3 && (
                <OrderHistoryForm user={user} />
              )}
              {activeFormId === 4 && (
                <EmailNewsletterForm />
              )}
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </main>
  );
};

export default ProfilePage;