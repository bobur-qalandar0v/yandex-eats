import React, { useEffect, useState } from "react";
import { API } from "../../api";
import { urls } from "../../constants/urls";
import DeliverIcon from "../../assets/icons/DeliverIcon";
import LoadingAnimate from "../../assets/icons/LoadingAnimate";

function RetailPage() {
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);

  const getCard = () => {
    setLoading(true);
    API.get(urls.shop_card.get)
      .then((res) => setCard(res.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCard();
  }, []);
  return (
    <div className="container">
      <div className="popular">
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
          <div className="popular__wrap">
            <h2 className="title">Популярные</h2>
            <div className="popular__items">
              {card.map((item) => {
                if (item.type == "popular") {
                  return (
                    <div className="popular__item" key={item.id}>
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
                  );
                }
              })}
            </div>

            <div className="popular__wrap flower">
              <h2 className="title">Цветы</h2>
              <div className="popular__items">
                {card.map((item) => {
                  if (item.type == "flowers") {
                    return (
                      <div className="popular__item" key={item.id}>
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
                    );
                  }
                })}
              </div>
            </div>

            <div className="popular__wrap flower">
              <h2 className="title">Аптеки</h2>
              <div className="popular__items">
                {card.map((item) => {
                  if (item.type == "pharmacy") {
                    return (
                      <div className="popular__item" key={item.id}>
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
                    );
                  }
                })}
              </div>
            </div>

            <div className="popular__wrap flower">
              <h2 className="title">Зоомагазины</h2>
              <div className="popular__items">
                {card.map((item) => {
                  if (item.type == "petstores") {
                    return (
                      <div className="popular__item" key={item.id}>
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
                    );
                  }
                })}
              </div>
            </div>
            <div className="popular__wrap flower">
              <h2 className="title">Гипермаркеты</h2>
              <div className="popular__items">
                {card.map((item) => {
                  if (item.type == "hypermarkets") {
                    return (
                      <div className="popular__item" key={item.id}>
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
                    );
                  }
                })}
              </div>
            </div>

            <div className="popular__wrap flower">
              <h2 className="title">Красота</h2>
              <div className="popular__items">
                {card.map((item) => {
                  if (item.type == "beauty") {
                    return (
                      <div className="popular__item" key={item.id}>
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
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RetailPage;
