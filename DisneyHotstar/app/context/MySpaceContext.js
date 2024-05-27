import React, { createContext, useState } from "react";

const MySpaceContext = createContext();

export const MySpaceProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState([]);

  const addLikedCard = (card) => {
    if (!likedCards.some((c) => c.id === card.id)) {
      setLikedCards([...likedCards, card]);
    }
  };
  const removeLikedCard = (cardId) => {
    setLikedCards(likedCards.filter((card) => card.id !== cardId));
  };

  return (
    <MySpaceContext.Provider
      value={{ likedCards, addLikedCard, removeLikedCard }}
    >
      {children}
    </MySpaceContext.Provider>
  );
};

export default MySpaceContext;
