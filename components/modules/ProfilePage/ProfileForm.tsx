import styles from "@/styles/profile/index.module.scss";
import ProfileAvatar from "@/components/modules/ProfilePage/ProfileAvatar";
import ProfileName from "@/components/modules/ProfilePage/ProfileName";
import ProfileSurname from "@/components/modules/ProfilePage/ProfileSurname";
import ProfileEmail from "@/components/modules/ProfilePage/ProfileEmail";
import ProfilePhone from "@/components/modules/ProfilePage/ProfilePhone";
import ProfileAddress from "@/components/modules/ProfilePage/ProfileAddress";
import ProfileCountry from "@/components/modules/ProfilePage/ProfileCountry";
import ProfileCity from "@/components/modules/ProfilePage/ProfileCity";
import { ProfileFormProps } from "@/types/others";

const ProfileForm: React.FC<ProfileFormProps> = ({
  user,
  register,
  errors,
  username,
  setUsername,
  surname,
  setSurname,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  country,
  setCountry,
  city,
  setCity,
  onSubmit,
  handleSubmit,
}) => {
  return (
    <form className={styles.profile__form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.profile__right__title}>Мій профіль</h2>
      <ProfileAvatar avatar={user?.avatar} />
      <ProfileName
        register={register}
        errors={errors}
        username={username}
        setUsername={setUsername}
      />
      <ProfileSurname
        register={register}
        errors={errors}
        surname={surname}
        setSurname={setSurname}
      />
      <ProfileEmail
        register={register}
        errors={errors}
        email={email}
        setEmail={setEmail}
      />
      <ProfilePhone
        register={register}
        errors={errors}
        phone={phone}
        setPhone={setPhone}
      />
      <ProfileAddress
        register={register}
        errors={errors}
        address={address}
        setAddress={setAddress}
      />
      <ProfileCountry
        register={register}
        errors={errors}
        country={country}
        setCountry={setCountry}
      />
      <ProfileCity
        register={register}
        errors={errors}
        city={city}
        setCity={setCity}
      />
      <div className={styles.profile__btn_wrapper}>
        <button type="submit" className={styles.profile__btn}>
          Зберегти зміни
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;