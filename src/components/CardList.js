import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  const cards = data.map(card => (
    <Card key={card.id} id={card.id} name={card.name} email={card.email} />
  ));

  return <div>{cards}</div>;
};

export default CardList;
