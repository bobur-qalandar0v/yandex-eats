import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SaveIcon from "../../assets/icons/SaveIcon";
import SaveActiveIcon from "../../assets/icons/SaveActiveIcon";
import DeliverIcon from "../../assets/icons/DeliverIcon";
import StarIcon from "../../assets/icons/StarIcon";
import { API } from "../../api";

import { Swiper, SwiperSlide } from "swiper/react";
import { urls } from "../../constants/urls";
import { Navigation } from "swiper/modules";

import "../../assets/components/CustomSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/components/swiper.css";
import NextIcon from "../../assets/icons/NextIcon";
import PrevIcon from "../../assets/icons/PrevIcon";
import LoadingAnimate from "../../assets/icons/LoadingAnimate";
import { SavedContext } from "../../contexts/SavedContext";

function DashboardPage() {
  const { addSaved, saved } = useContext(SavedContext);

  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);
  const [shopCard, setShopCard] = useState([]);

  let localeSelected = localStorage.getItem("selected")
    ? JSON.parse(localStorage.getItem("selected"))
    : "hammasi";

  const [sort, setSort] = useState([]);
  const [selectedType, setSelectedType] = useState(localeSelected);

  const getTypes = () => {
    API.get(urls.types.get)
      .then((res) => setSort(res.data))
      .catch((err) => console.log(err));
  };

  const getCards = () => {
    setLoading(true);
    API.get(urls.free_shipping.get)
      .then((res) => setCard(res.data))
      .finally(() => setLoading(false));
  };

  const getShopCards = () => {
    API.get(urls.shop_card.get).then((res) => setShopCard(res.data));
  };

  const handleType = (data) => {
    localStorage.setItem("selected", JSON.stringify(data));
    setSelectedType(data);
  };

  const handleSaveClick = (data) => {
    addSaved(data);
  };

  const filteredFoods =
    selectedType === "hammasi"
      ? card
      : card.filter((food) => food.type === selectedType);

  useEffect(() => {
    getCards();
    getShopCards();
    getTypes();
  }, []);

  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard__wrap">
          {loading ? (
            <div className="container">
              <div
                style={{
                  width: "100%",
                  height: "97vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LoadingAnimate />
              </div>
            </div>
          ) : (
            <>
              {/* Бесплатная доставка */}
              <div className="free__shipping">
                <h2 className="free__shipping-title title">
                  Бесплатная доставка
                </h2>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={3}
                  slidesPerGroup={3}
                  spaceBetween={20}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                >
                  {card.map((item) => {
                    if (item.discount == undefined) {
                      return (
                        <SwiperSlide
                          style={{ display: "block", position: "relative" }}
                          key={item.id}
                        >
                          <Link className="link" to={`/order_item/${item.id}`}>
                            <div className="card__img">
                              <img src={item.image} alt="img" />
                            </div>
                            <div className="contents">
                              <div className="contents-item">
                                <div>
                                  <h4 className="name">{item.name}</h4>
                                  <p
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <StarIcon />
                                    {item.rate}
                                  </p>
                                </div>
                                <p
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                  }}
                                >
                                  <DeliverIcon />
                                  {item.time} min
                                </p>
                                <span className="free">
                                  Бесплатная доставка
                                </span>
                              </div>
                            </div>
                          </Link>
                          <button
                            className="save__button"
                            onClick={() => handleSaveClick(item)}
                          >
                            {saved.some((i) => i.id === item.id) ? (
                              <SaveActiveIcon />
                            ) : (
                              <SaveIcon />
                            )}
                          </button>
                        </SwiperSlide>
                      );
                    }
                  })}
                </Swiper>
                <button className="custom-prev  custom-nav">
                  <PrevIcon style={{ transform: "rotate(180deg)" }} />
                </button>
                <button className="custom-next custom-next-btn custom-nav">
                  <NextIcon />
                </button>
              </div>

              {/* Скидка 20% на меню */}
              <div className="dashboard__discount">
                <h2 className="free__shipping-title title">
                  Скидка 20% на меню
                </h2>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={3}
                  slidesPerGroup={3}
                  spaceBetween={20}
                  navigation={{
                    nextEl: ".custom-next-discount",
                    prevEl: ".custom-prev-discount",
                  }}
                >
                  {card.map((item) => {
                    if (item.discount == "true") {
                      return (
                        <SwiperSlide
                          style={{ display: "block", position: "relative" }}
                          key={item.id}
                        >
                          <Link className="link" to={`/order_item/${item.id}`}>
                            <div className="card__img">
                              <img src={item.image} alt="img" />
                            </div>
                            <div className="contents">
                              <div className="contents-item">
                                <div>
                                  <h4 className="name">{item.name}</h4>
                                  <p
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <StarIcon />
                                    {item.rate}
                                  </p>
                                </div>
                                <p
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                  }}
                                >
                                  <DeliverIcon />
                                  {item.time} min
                                </p>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    justifyContent: "start",
                                  }}
                                >
                                  <span className="free">-20% на всё</span>
                                  <span className="free">
                                    Бесплатная доставка
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                          <button
                            className="save__button"
                            onClick={() => handleSaveClick(item)}
                          >
                            {saved.some((i) => i.id === item.id) ? (
                              <SaveActiveIcon />
                            ) : (
                              <SaveIcon />
                            )}
                          </button>
                        </SwiperSlide>
                      );
                    }
                  })}
                </Swiper>
                <button className="custom-prev-discount  custom-nav-discount">
                  <PrevIcon style={{ transform: "rotate(180deg)" }} />
                </button>
                <button className="custom-next-discount custom-nav-discount">
                  <NextIcon />
                </button>
              </div>

              {/* Shop */}
              <div className="dashboard__shop">
                <div className="title__wrap">
                  <h2 className="title">Магазины</h2>
                  <Link className="link__retail" to="/retail">
                    Все
                  </Link>
                </div>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={3}
                  slidesPerGroup={3}
                  spaceBetween={20}
                  navigation={{
                    nextEl: ".custom-next-shop",
                    prevEl: ".custom-prev-shop",
                  }}
                >
                  {shopCard.map((item) => (
                    <SwiperSlide
                      style={{ display: "block", position: "relative" }}
                      key={item.id}
                    >
                      <div className="free__shipping-item">
                        <div
                          className="card__img"
                          style={{
                            backgroundColor: `${item.rgb}`,
                            borderRadius: "24px",
                          }}
                        >
                          <img
                            src={item.image}
                            alt="img"
                            style={{
                              width: "100%",
                              objectFit: "contain",
                              padding: "40px",
                            }}
                          />
                        </div>
                        <div className="contents">
                          <div className="contents-item">
                            <div>
                              <h4 className="name">{item.name}</h4>
                            </div>
                            <p
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <DeliverIcon />
                              {item.time}
                            </p>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                justifyContent: "start",
                              }}
                            >
                              {item.deliver !== undefined ? (
                                <span className="free">{item.deliver}</span>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className="custom-prev-shop  custom-nav-shop custom-nav-shop">
                  <PrevIcon style={{ transform: "rotate(180deg)" }} />
                </button>
                <button className="custom-next-shop custom-nav-shop">
                  <NextIcon />
                </button>
              </div>

              <div className="dashboard__restoran">
                <h2 className="title">Restoranlar</h2>
                <div className="sections__wrap">
                  <div className="sections">
                    {sort.map((item) => (
                      <button
                        key={item.id}
                        className={`hover-btn ${
                          item.type === selectedType ? "active" : ""
                        }`}
                        onClick={() => handleType(item.type)}
                      >
                        {item.TypeName}
                      </button>
                    ))}
                  </div>
                  <div className="sort">
                    <button className="sort-btn hover-btn">
                      <img
                        src="https://yastatic.net/s3/eda-front/www/assets/buildid/desktop.slider_bar-f5b5df0938f1991ba835.svg"
                        alt="sort"
                      />
                      Saralash
                    </button>
                  </div>
                </div>

                <div className="sort__wrap">
                  {filteredFoods.map((item) => (
                    <div
                      style={{ display: "block", position: "relative" }}
                      key={item.id}
                    >
                      <Link className="link" to={`/order_item/${item.id}`}>
                        <div className="sort__img">
                          <img src={item.image} alt="img" />
                        </div>
                        <div className="contents">
                          <div className="contents-item">
                            <div>
                              <h4 className="name">{item.name}</h4>
                              <p
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <StarIcon />
                                {item.rate}
                              </p>
                            </div>
                            <p
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <DeliverIcon />
                              {item.time} min
                            </p>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                justifyContent: "start",
                              }}
                            >
                              <span className="free">-20% на всё</span>
                              <span className="free">Бесплатная доставка</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <button
                        className="save__button"
                        onClick={() => handleSaveClick(item)}
                      >
                        {saved.some((i) => i.id === item.id) ? (
                          <SaveActiveIcon />
                        ) : (
                          <SaveIcon />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
