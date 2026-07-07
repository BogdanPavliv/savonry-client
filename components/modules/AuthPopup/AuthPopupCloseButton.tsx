import { useDispatch } from "react-redux";
import { AuthPopupClose } from "@/app/redux/authPopupSlice";

const AuthPopupCloseButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="auth_popup__close"
      onClick={() => dispatch(AuthPopupClose())}
    ></button>
  );
};

export default AuthPopupCloseButton;
