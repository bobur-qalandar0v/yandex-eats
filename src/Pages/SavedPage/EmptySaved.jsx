import React from "react";
import { useNavigate } from "react-router-dom";

function EmptySaved() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="Saved">
      <div className="container">
        <div className="Saved-wrap">
          <div className="Saved-title">
            <h1 className="title">Ничего не добавлено</h1>
            <p className="text">
              Чтобы место появилось в коллекции, нажимайте на значок закладки
            </p>
          </div>
          <button className="home-btn" onClick={handleNavigate}>
            К ресторанам
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptySaved;
