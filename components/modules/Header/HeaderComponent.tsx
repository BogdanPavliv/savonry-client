import { useState } from "react";
import Image from "next/image";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/app/redux/headerSlice";
import { AuthPopupOpen } from "@/app/redux/authPopupSlice";
import { SearchPopupOpen } from "@/app/redux/searchPopupSlice";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { isTopOfPageProps } from "@/types/nav";
import HeaderProfile from "./HeaderProfile";
import { useSelector } from "react-redux";
import { checkIsAuth, logout } from "@/app/redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { RootState, AppDispatch } from "@/app/redux/store";
import { menuData } from "@/lib/utils/menuData";
import { footerMenuDataClient } from "@/lib/utils/footerMenuData";

const HeaderComponent = ({ isTopOfPage }: isTopOfPageProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isClientMenuOpen, setIsClientMenuOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const isMedia991 = useMediaQuery(991);
  const isMedia767 = useMediaQuery(767);

  const isAuth = useSelector(checkIsAuth);

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Ви вийшли із системи.");
  };

  const headerBackground = isTopOfPage ? "" : "";

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__top">
            <div className="container">
              <div className="header__top__content">
                <div className="header__top__left">
                  {isMedia991 ? (
                    <>
                      <button
                        className="header__burger"
                        onClick={() => dispatch(toggleMenu())}
                      ></button>
                      <Menu />
                    </>
                  ) : (
                    <ul className="header__top__nav_list">
                      <li className="header__top__nav_item">
                        <a href="" className="header__top__nav_link">
                          Статті
                        </a>
                      </li>
                      <li className="header__top__nav_item">
                        <a href="" className="header__top__nav_link">
                          Новини
                        </a>
                      </li>
                      <li
                        className="header__top__nav_item header__top__nav_item_arrow"
                        onMouseEnter={() => setIsClientMenuOpen(true)}
                        onMouseLeave={() => setIsClientMenuOpen(false)}
                      >
                        <a href="" className="header__top__nav_link">
                          Для клієнта
                        </a>
                        {isClientMenuOpen && (
                          <ul className="header__top__dropdown">
                            {footerMenuDataClient.map((item) => (
                              <li key={item.href} className="header__top__dropdown_item">
                                <Link href={item.href} className="header__top__dropdown_link">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </div>
                <div className="header__top__middle">
                  {!isMedia767 ? (
                    <Link href="/" className="logo">
                      <Image
                        className="logo__img"
                        width={170}
                        height={54}
                        src="/img/icons/logo.svg"
                        alt="Logo"
                      />
                    </Link>
                  ) : (
                    <Link href="/" className="logo">
                      <Image
                        className="logo__img"
                        width={45}
                        height={70}
                        src="/img/icons/logo-sm.svg"
                        alt="Logo"
                      />
                    </Link>
                  )}
                </div>
                <div className="header__top__right">
                  <ul className="header__top__actions_list">
                    {!isMedia767 && (
                      <li className="header__top__actions_item">
                        <button
                          onClick={() => dispatch(SearchPopupOpen())}
                          className="header__top__actions_link header__top__actions_link_search"
                        ></button>
                      </li>
                    )}
                    {!isMedia767 && (
                      <li className="header__top__actions_item">
                        <a
                          href=""
                          className="header__top__actions_link header__top__actions_link_phone"
                        ></a>
                      </li>
                    )}
                    <li className="header__top__actions_item">
                      {isAuth ? (
                        <HeaderProfile />
                      ) : (
                        <button
                          className="header__top__actions_link header__top__actions_link_user"
                          onClick={() => dispatch(AuthPopupOpen())}
                        ></button>
                      )}
                    </li>
                    <li className="header__top__actions_item">
                      {user && user.cart && user.cart.length > 0 && <span className='not-empty' />}
                      <Link
                        href="/cart"
                        className="header__top__actions_link header__top__actions_link_cart"
                      ></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {!isMedia991 && (
            <div className="header__bottom">
              <div className="container">
                <div className="header__bottom__content">
                  <ul className="header__bottom__nav_list">
                    {menuData.map((category) => (
                      <li
                        key={category.name}
                        className="header__bottom__nav_item"
                        onMouseEnter={() => setActiveCategory(category.name)}
                        onMouseLeave={() => setActiveCategory(null)}
                      >
                        <Link
                          href={category.href}
                          className="header__bottom__nav_link"
                        >
                          {category.name}
                        </Link>
                        {category.subcategories && (
                          <DropdownMenu
                            subcategories={category.subcategories}
                            isVisible={activeCategory === category.name}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
