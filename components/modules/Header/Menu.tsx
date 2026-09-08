import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Accordion from "../Accordion/Accordion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SearchPopupOpen } from "@/app/redux/searchPopupSlice";
import PromotionsListItems from "./PromotionsListItems";
import NoveltyListItems from "./NoveltyListItems";
import FaceListItems from "./FaceListItems";
import BathAndShowerListItems from "./BathAndShowerListItems";
import BodyListItems from "./BodyListItems";
import HairListItems from "./HairListItems";
import ForHimListItems from "./ForHimListItems";
import GiftsListItems from "./GiftsListItems";
import SeriesListItems from "./SeriesListItems";
import AccessoriesListItems from "./AccessoriesListItems";
import ForTheClientListItems from "./ForTheClientListItems";
import NewsListItems from "./NewsListItems";
import ArticlesListItems from "./ArticlesListItems";
import { closeMenu } from "@/app/redux/headerSlice";

const Menu = () => {
  const [activeListId, setActiveListId] = useState(5);
  const dispatch = useDispatch();
  const isMenuToggled = useSelector(
    (state: RootState) => state.header.isMenuToggled,
  );
  const isMedia767 = useMediaQuery(767);

  const handlePromotionsList = () => setActiveListId(1);
  const handleNoveltyList = () => setActiveListId(2);
  const handleFaceList = () => setActiveListId(3);
  const handleBathAndShowerList = () => setActiveListId(4);
  const handleShowBodyList = () => setActiveListId(5);
  const handleForHimList = () => setActiveListId(12);
  const handleGiftsList = () => setActiveListId(7);
  const handleSeriesList = () => setActiveListId(8);
  const handleAccessoriesList = () => setActiveListId(9);
  const handleForTheClientList = () => setActiveListId(10);
  const handleNewsList = () => setActiveListId(11);
  const handleHairList = () => setActiveListId(6);
  const handleArticlesList = () => setActiveListId(13);

  return (
    <nav className={`mobile_menu ${isMenuToggled ? "open" : "close"}`}>
      <div className="mobile_menu__inner">
        <button
          className="mobile_menu__close"
          onClick={() => dispatch(closeMenu())}
        ></button>
        <div className="mobile_menu__top">
          <ul className="mobile_menu__top__actions_list">
            <li className="mobile_menu__top_actions_item">
              <button
                onClick={() => dispatch(SearchPopupOpen())}
                className="mobile_menu__top__actions_link mobile_menu__top__actions_link_search"
              ></button>
            </li>
            <li className="mobile_menu__top_actions_item">
              <a
                href=""
                className="mobile_menu__top__actions_link mobile_menu__top__actions_link_phone"
              ></a>
            </li>
          </ul>
          {!isMedia767 ? (
            <a className="logo_mobile" href="">
              <Image
                className="logo_mobile__img"
                width={170}
                height={54}
                src="/img/icons/logo.svg"
                alt="Logo"
              />
            </a>
          ) : (
            <a className="logo_mobile" href="">
              <Image
                className="logo_mobile__img"
                width={45}
                height={70}
                src="/img/icons/logo-sm.svg"
                alt="Logo"
              />
            </a>
          )}
        </div>
        <div className="mobile_menu__bottom">
          <div className="mobile_menu__left">
            <ul className="mobile_menu__list">
              <li className="mobile_menu__item">
                <Link
                  href="/promotion"
                  className="mobile_menu__btn"
                  onMouseEnter={handlePromotionsList}
                >
                  Акції
                </Link>
              </li>
              <li className="mobile_menu__item">
                <Link
                  href="/new-product"
                  className="mobile_menu__btn"
                  onMouseEnter={handleNoveltyList}
                >
                  Новинки
                </Link>
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <Link
                    href="/catalog/обличчя"
                    className="mobile_menu__btn"
                    onMouseEnter={handleFaceList}
                  >
                    Обличчя
                  </Link>
                )}
                {isMedia767 && (
                  <Accordion title={"Обличчя"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <FaceListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <Link
                    href="/catalog/ванна та душ"
                    className="mobile_menu__btn"
                    onMouseEnter={handleBathAndShowerList}
                  >
                    Ванна та душ
                  </Link>
                )}
                {isMedia767 && (
                  <Accordion
                    title={"Ванна та душ"}
                    titleClass="mobile_menu__btn"
                  >
                    <ul className="mobile_menu__right_list">
                      <BathAndShowerListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <Link
                    href="/catalog/тіло"
                    className="mobile_menu__btn"
                    onMouseEnter={handleShowBodyList}
                  >
                    Тіло
                  </Link>
                )}
                {isMedia767 && (
                  <Accordion title={"Тіло"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <BodyListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <Link
                    href="/catalog/волосся"
                    className="mobile_menu__btn"
                    onMouseEnter={handleHairList}
                  >
                    Волосся
                  </Link>
                )}
                {isMedia767 && (
                  <Accordion title={"Волосся"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <HairListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                <Link
                  href="/catalog/для нього"
                  className="mobile_menu__btn"
                  onMouseEnter={handleForHimList}
                >
                  Для нього
                </Link>
              </li>
              <li className="mobile_menu__item">
                <Link
                  href="/catalog/подарунки"
                  className="mobile_menu__btn"
                  onMouseEnter={handleGiftsList}
                >
                  Подарунки
                </Link>
              </li>
              <li className="mobile_menu__item">
                <Link
                  href="/catalog/серії"
                  className="mobile_menu__btn"
                  onMouseEnter={handleSeriesList}
                >
                  Серії
                </Link>
              </li>
              <li className="mobile_menu__item">
                <Link
                  href="/catalog/аксесуари"
                  className="mobile_menu__btn"
                  onMouseEnter={handleAccessoriesList}
                >
                  Аксесуари
                </Link>
              </li>
            </ul>
          </div>
          {!isMedia767 && (
            <div className="mobile_menu__right">
              <AnimatePresence>
                {activeListId === 3 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/обличчя/креми">
                        Креми для обличчя
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/обличчя/скраби">
                        Скраби
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/обличчя/сироватки">
                        Сироватки
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/обличчя/маски">
                        Маски
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 4 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/ванна та душ/бомбочки для ванни">
                        Бомбочки для ванни
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/ванна та душ/солі">
                        Солі
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/ванна та душ/мило ручної роботи">
                        Мило ручної роботи
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/ванна та душ/вируючі кульки для ванн">
                        Вируючі кульки для ванн
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 5 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/антибактеріальні засоби">
                        Антибактеріальні засоби
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/антицелюлітна серія">
                        Антицелюлітна серія
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/антицелюлітна скраб-маска">
                        Антицелюлітна скраб-маска
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/гель алое вера">
                        Гель алое вера
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/дезодоранти">
                        Дезодоранти
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/креми для тіла">
                        Креми для тіла
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/масажні плитки">
                        Масажні плитки
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/натуральні масла">
                        Натуральні масла
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/обгортання">
                        Обгортання
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/парфумовані спреї для тіла">
                        Парфумовані спреї для тіла
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/скраби для тіла">
                        Скраби для тіла
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/сонцезахисні засоби">
                        Сонцезахисні засоби
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/засоби для ніг">
                        Засоби для ніг
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/засоби для рук">
                        Засоби для рук
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/тіло/щітки для сухого масажу">
                        Щітки для сухого масажу
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 6 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/волосся/шампуні">
                        Шампуні
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/волосся/бальзами">
                        Бальзами
                      </Link>
                    </li>
                    <li className="mobile_menu__right_item">
                      <Link className="mobile_menu__right_link" href="/subcategories/волосся/маски">
                        Маски
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
