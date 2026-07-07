import { useState, useEffect } from "react";
import { useAuthForm } from "@/hooks/useAuthForm";
import NameInput from "./NameInput";
import SurnameInput from "./SurnameInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./PasswordInput";
import RepeatPasswordInput from "./RepeatPasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, registerUser } from "@/app/redux/features/auth/authSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IInputs } from "@/types/authPopup";

const AuthPopupRegistration = () => {
  const { register, errors, handleSubmit } = useAuthForm();
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { status } = useSelector((state: RootState) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (status) toast(status);
    if (isAuth) router.push("/");
  }, [status, isAuth, router]);

  const submitForm = (data: IInputs) => {
    try {
      dispatch(
        registerUser({
          username: data.username,
          surname: data.surname,
          email: data.email,
          phone: data.phone,
          password: data.password,
          repeatPassword: data.repeatPassword,
        })
      );
      setUsername("");
      setSurname("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRepeatPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card__registration registration">
      <form
        className="card__registration_form"
        onSubmit={handleSubmit(submitForm)}
      >
        <NameInput
          register={register}
          errors={errors}
          username={username}
          setUsername={setUsername}
        />
        <SurnameInput
          register={register}
          errors={errors}
          surname={surname}
          setSurname={setSurname}
        />
        <EmailInput
          register={register}
          errors={errors}
          email={email}
          setEmail={setEmail}
        />
        <PhoneInput
          register={register}
          errors={errors}
          phone={phone}
          setPhone={setPhone}
        />
        <PasswordInput
          register={register}
          errors={errors}
          password={password}
          setPassword={setPassword}
        />
        <RepeatPasswordInput
          register={register}
          errors={errors}
          repeatPassword={repeatPassword}
          setRepeatPassword={setRepeatPassword}
        />
        <div className="auth_popup__btn_wrapper">
          <button 
            className="auth_popup__btn" 
            type="submit"
          >
            Продовжити
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPopupRegistration;
