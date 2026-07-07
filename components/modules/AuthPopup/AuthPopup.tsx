import { useState } from "react";
import AuthPopupRegistration from "./AuthPopupRegistration";
import AuthPopupLogin from "./AuthPopupLogin";
import AuthPopupCloseButton from './AuthPopupCloseButton';

const AuthPopup = () => {
  const [activeFormId, SetActiveFormId] = useState(1);

  const handleShowRegistrationForm = () => SetActiveFormId(1);
  const handleShowLoginForm = () => SetActiveFormId(2);

  return (
    <div className="container-popup">
      <div className="auth_popup__card">
        <AuthPopupCloseButton />
        <div className="auth_popup__inner">
          <div className="auth_popup__top">
            <button
              className={
                activeFormId === 1
                  ? "auth_popup__title auth_popup__title_active"
                  : "auth_popup__title"
              }
              type="button"
              onClick={handleShowRegistrationForm}
            >
              Реєстрація
            </button>
            <button
              className={
                activeFormId === 2
                  ? "auth_popup__title auth_popup__title_active"
                  : "auth_popup__title"
              }
              type="button"
              onClick={handleShowLoginForm}
            >
              Вхід
            </button>
          </div>
          {activeFormId === 1 && <AuthPopupRegistration />}
          {activeFormId === 2 && <AuthPopupLogin />}
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
