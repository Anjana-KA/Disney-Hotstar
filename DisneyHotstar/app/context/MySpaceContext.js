import React, { createContext, useState } from "react";

const MySpaceContext = createContext();

export const MySpaceProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState([]);

  const addLikedCard = (card) => {
    setLikedCards([...likedCards, card]);
  };

  return (
    <MySpaceContext.Provider value={{ likedCards, addLikedCard }}>
      {children}
    </MySpaceContext.Provider>
  );
};

export default MySpaceContext;
