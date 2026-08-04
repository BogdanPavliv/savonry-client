"use client";
import { useEffect, useRef } from "react";
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import { AuthPopupClose } from "@/app/redux/authPopupSlice";
import { SearchPopupClose } from "@/app/redux/searchPopupSlice";
import AuthPopup from "@/components/modules/AuthPopup/AuthPopup";
import SearchModal from "@/components/modules/Header/SearchModal";
import { getMe } from "@/app/redux/features/auth/authSlice";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const openAuthPopup = useSelector(
    (state: RootState) => state.authPopup.openAuthPopup
  );

  const openSearchPopup = useSelector(
    (state: RootState) => state.searchPopup.openSearchPopup
  );

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const authWrapperRef = useRef<HTMLDivElement>(null);

  const handleCloseAuthPopupByTarget = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as Element;
    if (target === authWrapperRef.current) {
      dispatch(AuthPopupClose());
    }
  };

  return (
    <>
      <Header />
      {children}
      
      {/* Auth Popup */}
      {openAuthPopup && (
        <div
          className="auth_popup_wrapper"
          onClick={handleCloseAuthPopupByTarget}
          ref={authWrapperRef}
        >
          <AuthPopup />
        </div>
      )}
      
      {/* Search Modal з анімацією */}
      <AnimatePresence>
        {openSearchPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: "fixed", zIndex: 102 }}
          >
            <SearchModal />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
      
      {/* Auth Overlay */}
      <div
        className={`auth-overlay ${openAuthPopup ? "overlay-active" : ""}`}
        onClick={() => dispatch(AuthPopupClose())}
      />
    </>
  );
};

export default Layout;