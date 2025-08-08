import React, { useEffect, useRef, useState } from "react";
import LocationIcon from "../../assets/icons/LocationIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import LanguageComponent from "./LanguageComponent";
import { Link, useLocation } from "react-router-dom";
import PlusBtnIcon from "../../assets/icons/ProfileDrawerIcons/PlusBtnIcon";
import ProfileIcon from "../../assets/icons/ProfileDrawerIcons/ProfilIcon";
import OrdersIcon from "../../assets/icons/ProfileDrawerIcons/OrdersIcon";
import SavedIcon from "../../assets/icons/ProfileDrawerIcons/SavedIcon";
import PromacodeIcon from "../../assets/icons/ProfileDrawerIcons/PromacodeIcon";
import MyAddressIcon from "../../assets/icons/ProfileDrawerIcons/MyAddressIcon";
import ZadaniyaIcon from "../../assets/icons/ProfileDrawerIcons/ZadaniyaIcon";
import YandexSplitIcon from "../../assets/icons/ProfileDrawerIcons/YandexSplitIcon";
import NearHelpIcon from "../../assets/icons/ProfileDrawerIcons/NearHelpIcon";
import BecomeKuryerIcon from "../../assets/icons/ProfileDrawerIcons/BecomeKuryerIcon";
import WorkYandexIcon from "../../assets/icons/ProfileDrawerIcons/WorkYandexIcon";
import LogOutIcon from "../../assets/icons/ProfileDrawerIcons/LogOutIcon";

function Header({ isDark }) {
  const profileModalRef = useRef(null);

  const Location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    switch (Location.pathname) {
      case "/saved":
        break;
    }
    setOpenProfile(false);
  }, [Location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        profileModalRef.current &&
        !profileModalRef.current.contains(e.target)
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [openProfile]);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        isDark ? "dark" : "light"
      } `}
    >
      <div className="header__wrap">
        <div className="header__left">
          <Link to="/">
            <img
              className="header__logo"
              src="https://avatars.mds.yandex.net/get-bunker/128809/0efb578cd41a9939800311677e6f4f8a12f04e90/orig"
              alt="Logo"
            />
          </Link>
          <div className="header__search">
            <span className="header__icon">
              <SearchIcon />
            </span>
            <input
              className="header__search-input"
              type="search"
              placeholder="Restoran, taom yoki mahsulot topish"
            />
            <button className="header__search-button">Topish</button>
          </div>
          <button className="header__location">
            <LocationIcon /> Yetkazish manzilini kiriting
          </button>
        </div>

        <div className="header__right">
          <div className="header__notification language">
            <LanguageComponent />
          </div>
          {/* <Link to="/login" className="header__login">
            Kirish
          </Link> */}
          <button
            className="profile-button"
            onClick={() => setOpenProfile(true)}
          >
            <img
              src="https://avatars.mds.yandex.net/get-yapic/37154/0w-8/normal"
              alt="profile-img"
            />
          </button>

          {openProfile ? (
            <div className="profile-modal" ref={profileModalRef}>
              <div className="profile-modal__wrap">
                <div className="profile-modal__header">
                  <div className="header-left">
                    <h3>bobur qalandarov</h3>
                    <button className="profile">
                      <span className="profile-txt">В профил</span>
                      <span className="profile-icn">
                        <ProfileIcon />
                      </span>
                    </button>
                  </div>
                  <div className="header-right">
                    <button className="plyus-btn">
                      <span className="plyus-btn__icon">
                        <PlusBtnIcon />
                      </span>
                      <p>плюс</p>
                    </button>
                  </div>
                </div>
                <div className="profile-modal__main">
                  <Link to="#" className="orders modal-item">
                    <OrdersIcon /> Заказы
                  </Link>
                  <Link to="/saved" className="saves modal-item">
                    <SavedIcon /> Сохраненные места
                  </Link>
                  <Link to="#" className="promacodes modal-item">
                    <PromacodeIcon /> Промокоды
                  </Link>
                  <Link to="#" className="my-address modal-item">
                    <MyAddressIcon /> Мои адреса
                  </Link>
                  <Link to="#" className="my-address modal-item">
                    <ZadaniyaIcon /> Задания
                  </Link>
                  <Link to="#" className="my-address modal-item">
                    <YandexSplitIcon /> Яндекс Сплит
                  </Link>
                  <Link to="#" className="my-address modal-item">
                    <NearHelpIcon /> Помощь рядом
                  </Link>
                  <Link to="#" className="my-address modal-item">
                    <BecomeKuryerIcon /> Стать курьером
                  </Link>
                  <Link to="#" className="my-address modal-item">
                    <WorkYandexIcon /> Работа в Яндекс Еде
                  </Link>
                  <Link to="#" className="my-address modal-item">
                    <LogOutIcon /> Выйти
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
