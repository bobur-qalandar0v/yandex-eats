import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../api";
import { urls } from "../../constants/urls";
import LeftIcon from "../../assets/icons/LeftIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import LoadingAnimate from "../../assets/icons/LoadingAnimate";
import DeliverIcon from "../../assets/icons/DeliverIcon";
import StarIcon from "../../assets/icons/StarIcon";
import PlusIcon from "../../assets/icons/PlusIcon";

function OrderItem() {
  const [order, setOrder] = useState([]);
  const [activeType, setActiveType] = useState(null);
  const [loading, setLoading] = useState(true);

  const obServerRef = useRef(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const getProducts = () => {
    setLoading(true);
    API.get(`${urls.free_shipping.get}/${id}`)
      .then((res) => setOrder(res.data))
      .finally(() => setLoading(false));
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleType = (data) => {
    const el = document.getElementById(data.TypeName);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveType(data.TypeName);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0.1,
    };

    obServerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveType(entry.target.id);

          const menuItem = document.querySelector(
            `[data-type="${entry.target.id}"]`
          );
          menuItem?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      });
    }, options);

    const sections = document.querySelectorAll(".title");
    sections.forEach((section) => obServerRef.current.observe(section));

    return () => {
      if (obServerRef.current) {
        obServerRef.current.disconnect();
      }
    };
  }, [order]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
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
        <div className="wrapper">
          <aside className="wrapper__left">
            <button className="left__btn" onClick={handleClick}>
              <LeftIcon />
              <span>Все рестораны</span>
            </button>
            <button className="info__btn">
              <div className="chaqmoq">
                <img
                  src="https://avatars.mds.yandex.net/get-eda-images/9706557/0fe6bc97-7bf4-11ef-8515-c6b7478f70d4/orig"
                  alt="chaqmoq"
                />
              </div>
              <div>
                <div style={{ color: "rgb(90, 195, 26)", fontSize: "15px" }}>
                  Бесплатная доставка от
                  <br /> 600 ₽ {order.time} мин
                </div>
                <div style={{ color: "rgb(158, 155, 152)", fontSize: "15px" }}>
                  Подробные условия
                </div>
              </div>
              <InfoIcon />
            </button>
            <h2 className="left__title">Меню </h2>
            <ul className="left__ul">
              {order?.types?.map((item) => (
                <li
                  className={`left__li ${
                    activeType === item.TypeName ? "active" : ""
                  }`}
                  key={item.id}
                  datatype={item.TypeName}
                  onClick={() => handleType(item)}
                >
                  {item.type}
                </li>
              ))}
            </ul>
          </aside>
          <div className="wrapper__right">
            <div className="right__content">
              <div className="right__shadow"></div>
              <img className="right__img" src={order.image} alt="img" />
              <h1 className="right__title">{order.name}</h1>
              <div className="info__div">
                <div className="deliver__time all">
                  <span>
                    <DeliverIcon style={{ width: "34px", height: "34px" }} />
                  </span>
                  <div>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {order.time} <br />
                      min
                    </p>
                  </div>
                </div>
                <div className="info__rate all">
                  <p>
                    <StarIcon style={{ width: "34px", height: "34px" }} />
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {order.rate} <br />
                  </p>
                </div>
                <div className="info__icon all">
                  <span>
                    <InfoIcon
                      style={{ width: "34px", height: "34px", color: "#000" }}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="free__deliver">
              <div className="free__deliver-item">
                <img
                  src="https://eda.yandex/images/3816972/0a6904a5dbf6de2762626985e3fc860b.png"
                  alt="img"
                  className="back__img"
                />
                <span>Бесплатная доставка – действует на заказ от 600 ₽</span>
              </div>
              <div className="free__deliver-item">
                <img
                  src="https://eda.yandex/images/3816972/0a6904a5dbf6de2762626985e3fc860b.png"
                  className="back__img"
                />
                <span>
                  Блюдо в подарок – Пепперони в подарок при заказе от 1990 без
                  учёта стоимости доставки и работы сервиса
                </span>
              </div>
            </div>

            {order?.types?.map((type) => (
              <div className="user__choose" key={type.id}>
                <h1 className="title" id={type.TypeName}>
                  {type.type.replaceAll("_", " ")}
                </h1>
                <div className="cards">
                  {order?.foods
                    ?.filter((item) => item.type === type.TypeName)
                    ?.map((item) => (
                      <div className="cards__item" key={item.id}>
                        <img
                          className="cards__img"
                          src={item.image}
                          alt="img"
                        />
                        <div className="price__wrap">
                          <p className="price">{item.price} ₽</p>
                          <p className="name">{item.name}</p>
                        </div>
                        <p className="weight">
                          {item.weight == "" ? " " : item.weight}
                        </p>
                        <button className="add__btn">
                          <PlusIcon /> Добавить
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderItem;
