import { withClickOutside } from "@/components/hocs/withClickOutside";
import { logout } from "@/app/redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IWrappedComponentProps } from "@/types/hocs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/app/redux/store";
import Image from "next/image";

const HeaderProfile = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ open, setOpen }, ref) => {
    const { user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();

    const handleTogglePopup = () => setOpen(!open);

    const router = useRouter();

    const logoutHandler = () => {
      dispatch(logout());
      window.localStorage.removeItem("token");
      toast("Ви вийшли із системи.");
      router.push("/"); // редірект на головну
    };
    return (
      <div className="header__profile__popup" ref={ref}>
        <button className="header__profile__btn" onClick={handleTogglePopup}>
          <Image
            src={
              user?.avatar
                ? `http://localhost:3002/${user.avatar}`
                : "/img/icons/user.svg"
            }
            alt="profile"
            width={32}
            height={32}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="header__profile__inner"
            >
              <li className="header__profile__arrow"></li>
              <li className="header__profile__item">
                <Link href="/profile" className="header__profile__item__btn">
                  Профіль
                </Link>
              </li>
              <li className="header__profile__item">
                <button
                  className="header__profile__item__btn"
                  onClick={logoutHandler}
                >
                  Вийти
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

HeaderProfile.displayName = "HeaderProfile";

export default withClickOutside(HeaderProfile);
