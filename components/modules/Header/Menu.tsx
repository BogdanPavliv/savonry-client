import { useState } from "react";
import Image from "next/image";
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
    (state: RootState) => state.header.isMenuToggled
  );
  const isMedia767 = useMediaQuery(767);
  
  const handlePromotionsList = () => setActiveListId(1);
  const handleNoveltyList = () => setActiveListId(2);
  const handleFaceList = () => setActiveListId(3);
  const handleBathAndShowerList = () => setActiveListId(4);
  const handleShowBodyList = () => setActiveListId(5);
  const handleForHimList = () => setActiveListId(6);
  const handleGiftsList = () => setActiveListId(7);
  const handleSeriesList = () => setActiveListId(8);
  const handleAccessoriesList = () => setActiveListId(9);
  const handleForTheClientList = () => setActiveListId(10);
  const handleNewsList = () => setActiveListId(11);
  const handleHairList = () => setActiveListId(12);
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
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handlePromotionsList}
                  >
                    Акції
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Акції"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <PromotionsListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleNoveltyList}
                  >
                    Новинки
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Новинки"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <NoveltyListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleFaceList}
                  >
                    Лице
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Лице"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <FaceListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleBathAndShowerList}
                  >
                    Ванна та душ
                  </button>
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
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleShowBodyList}
                  >
                    Тіло
                  </button>
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
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleHairList}
                  >
                    Волосся
                  </button>
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
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleForHimList}
                  >
                    Для нього
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Для нього"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <ForHimListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleGiftsList}
                  >
                    Подарунки
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Подарунки"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <GiftsListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleSeriesList}
                  >
                    Серії
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Серії"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <SeriesListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleAccessoriesList}
                  >
                    Аксесуари
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Аксесуари"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <AccessoriesListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleForTheClientList}
                  >
                    Для клієнта
                  </button>
                )}
                {isMedia767 && (
                  <Accordion
                    title={"Для клієнта"}
                    titleClass="mobile_menu__btn"
                  >
                    <ul className="mobile_menu__right_list">
                      <ForTheClientListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleNewsList}
                  >
                    Новини
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Новини"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <NewsListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
              <li className="mobile_menu__item">
                {!isMedia767 && (
                  <button
                    className="mobile_menu__btn"
                    onMouseEnter={handleArticlesList}
                  >
                    Статті
                  </button>
                )}
                {isMedia767 && (
                  <Accordion title={"Статті"} titleClass="mobile_menu__btn">
                    <ul className="mobile_menu__right_list">
                      <ArticlesListItems />
                    </ul>
                  </Accordion>
                )}
              </li>
            </ul>
          </div>
          {!isMedia767 && (
            <div className="mobile_menu__right">
              <AnimatePresence>
                {activeListId === 1 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 2 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 3 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
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
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
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
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
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
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 7 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 8 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 9 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 10 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 11 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 12 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeListId === 13 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mobile_menu__right_list"
                  >
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антибактеріальні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна серія SLIM&SEXY
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Антицелюлітна Скраб-маска
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Гель алое аера
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Дезодоранти
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Креми для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Масажні плитки
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Натуральні олії
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Обгортання
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Парфумовані спреї для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Скраби для тіла
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Сонцезахисні засоби
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для ніг
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Засоби для рук
                      </a>
                    </li>
                    <li className="mobile_menu__right_item">
                      <a className="mobile_menu__right_link" href="">
                        Щітки для сухого масажу
                      </a>
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
