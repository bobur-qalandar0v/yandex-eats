import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SavedContext } from "../../contexts/SavedContext";
import SaveIcon from "../../assets/icons/SaveIcon";
import DeliverIcon from "../../assets/icons/DeliverIcon";
import StarIcon from "../../assets/icons/StarIcon";
import SaveActiveIcon from "../../assets/icons/SaveActiveIcon";

function SavedPage() {
  const { saved, addSaved } = useContext(SavedContext);

  return (
    <div className="savedpage">
      <div className="savedpage-wrap">
        {saved.map((item) => (
          <div style={{ display: "block", position: "relative" }} key={item.id}>
            <Link className="link" to={`/order_item/${item.id}`}>
              <div className="savedpage__img">
                <img src={item.image} alt="img" />
              </div>
              <div className="contents">
                <div className="contents-item">
                  <div>
                    <h3 className="name">{item.name}</h3>
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "18px",
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
                      fontSize: "18px",
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
            <button className="save__button" onClick={() => addSaved(item)}>
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
  );
}

export default SavedPage;
