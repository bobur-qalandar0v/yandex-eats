import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="install__wrap">
          <span>В приложении ещё удобнее</span>
          <div className="install__btns">
            <button className="app__store">
              <img
                src="	https://avatars.mds.yandex.net/get-bunker/50064/763f8b02d2dcb86dc0a7f5c00609ce68261cd418/svg"
                alt="AppStore"
              />
            </button>
            <button className="play__store">
              <img
                src="https://avatars.mds.yandex.net/get-bunker/60661/56991f6060ab2c47ea80ddb75ab1a1358e0e58fc/svg"
                alt="PlayStore"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="footer__center">
          <div className="title__wrap">
            <h3 className="title">Блюда и кухни</h3>
            <h3 className="title">О компании</h3>
          </div>
          <div className="content__wrap">
            <div className="foods_and_kitchens">
              <div className="columns">
                <span>Выпечка</span>
                <span>Блины</span>
                <span>Бургеры</span>
                <span>Чебуреки</span>
                <span>Кофе</span>
                <span>Десерты</span>
                <span>Фастфуд</span>
                <span>Грузинская кухня</span>
                <span>Хот-дог</span>
              </div>
              <div className="columns">
                <span>Икра горбуши</span>
                <span>Итальянская кухня</span>
                <span>Каша</span>
                <span>Манты</span>
                <span>Мороженое</span>
                <span>Обед</span>
                <span>Пироги</span>
                <span>Пицца</span>
                <span>Поке</span>
              </div>
              <div className="columns">
                <span>Пончики</span>
                <span>Рамен</span>
                <span>Русская кухня</span>
                <span>Салаты</span>
                <span>Сэндвичи</span>
                <span>Морепродукты</span>
                <span>Шашлык</span>
                <span>Шаурма</span>
                <span>Суп</span>
              </div>
              <div className="columns">
                <span>Стейки</span>
                <span>Роллы</span>
                <span>Сырники</span>
                <span>Торты</span>
                <span>Вегетарианские блюда</span>
                <span>Вок</span>
                <span>Завтраки</span>
                <span>Здоровая еда</span>
              </div>
            </div>
            <div className="About_the_company">
              <div className="column">
                <span>Пользовательское соглашение</span>
                <span>Правила рекомендаций</span>
                <span>Контакты</span>
                <span>Доставка</span>
                <span>Вопросы и ответы</span>
                <span>Стать партнёром</span>
                <span>Стать курьером</span>
                <span>Еда для бизнеса</span>
                <span>Переработка пластика</span>
                <span>Заказ еды в приложении Яндекс Go</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="footer__bottom">
          <p className="footer__bottom-item">© 2018–2025 ООО «Яндекс.Еда»</p>
          <div className="wk">
            <p className="footer__bottom-item">Проект компании Яндекс</p>
            <img
              src="	https://avatars.mds.yandex.net/get-bunker/49769/9362802ad550d87a743751b144a576ad35d9d035/svg"
              alt="wk"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
