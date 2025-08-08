import { createContext, useState } from "react";

export const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  let localInitial = localStorage.getItem("saved")
    ? JSON.parse(localStorage.getItem("saved"))
    : [];

  const [saved, setSaved] = useState(localInitial);

  const setLocalSaved = (data) => {
    localStorage.setItem("saved", JSON.stringify(data));
    setSaved(data);
  };

  const addSaved = (data) => {
    if (saved.some((item) => item.id === data.id)) {
      setLocalSaved(saved.filter((item) => item.id !== data.id));
    } else {
      setLocalSaved([...saved, { ...data }]);
    }
  };

  return (
    <SavedContext.Provider
      value={{
        saved,
        setSaved,
        addSaved,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};
