import React, { useContext } from "react";
import { SavedContext } from "../../contexts/SavedContext";
import SavedPage from "./SavedPage";
import EmptySaved from "./EmptySaved";

function Saved() {
  const { saved } = useContext(SavedContext);
  return (
    <div className="Saved">
      <div className="container">
        {saved.length > 0 ? <SavedPage /> : <EmptySaved />}
      </div>
    </div>
  );
}

export default Saved;
