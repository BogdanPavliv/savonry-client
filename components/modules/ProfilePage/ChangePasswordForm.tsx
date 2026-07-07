import styles from "@/styles/profile/index.module.scss";
import ProfilePassword from "@/components/modules/ProfilePage/ProfilePassword";
import NewProfilePassword from "@/components/modules/ProfilePage/NewProfilePassword";
import RepeatNewProfilePassword from "@/components/modules/ProfilePage/RepeatNewProfilePassword";
import { ChangePasswordFormProps } from "@/types/others";

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  register,
  errors,
  password,
  setPassword,
  newPassword,
  setNewPassword,
  repeatNewPassword,
  setRepeatNewPassword,
  onSubmit,
  handleSubmit,
}) => {
  return (
    <form 
      className={styles.profile__change_password_form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={styles.profile__right__title}>Зміна паролю</h2>
      <ProfilePassword
        register={register}
        errors={errors}
        password={password}
        setPassword={setPassword}
      />
      <NewProfilePassword
        register={register}
        errors={errors}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
      />
      <RepeatNewProfilePassword 
        register={register} 
        errors={errors} 
        repeatNewPassword={repeatNewPassword}
        setRepeatNewPassword={setRepeatNewPassword}
      />
      <div className={styles.profile__btn_wrapper}>
        <button type="submit" className={styles.profile__btn}>
          Зберегти зміни
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;