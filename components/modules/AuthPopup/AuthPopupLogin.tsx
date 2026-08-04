import { useState, useEffect } from "react";
import { AuthPopupClose } from "@/app/redux/authPopupSlice";
import { useAuthForm } from "@/hooks/useAuthForm";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { checkIsAuth, loginUser } from "@/app/redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IInputs } from '@/types/authPopup'

const AuthPopupLogin = () => {
  const { register, errors, handleSubmit } = useAuthForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state: RootState) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  
  useEffect(() => {
    if (status) toast(status);
    if (isAuth) {router.push("/"); dispatch(AuthPopupClose());};
  }, [status, isAuth, router, dispatch]);

  const submitForm = (data: IInputs) => {
    try {
      dispatch(
        loginUser({
          email: data.email,
          password: data.password,
        })
      );
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card__login login">
      <form className="card__login_form" onSubmit={handleSubmit(submitForm)}>
        <EmailInput
          register={register}
          errors={errors}
          email={email}
          setEmail={setEmail}
        />
        <PasswordInput
          register={register}
          errors={errors}
          password={password}
          setPassword={setPassword}
        />
        <div className="auth_popup__btn_wrapper">
          <button
            type="submit"
            className="auth_popup__btn"
          >
            Продовжити
          </button>
        </div>
        <a className="inner__reset" href="">
          Забули пароль?
        </a>
      </form>
    </div>
  );
};

export default AuthPopupLogin;
