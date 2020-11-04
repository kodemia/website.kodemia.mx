import React from "react";
import { deflate } from "zlib";
// My component
import H2 from "../../H2";
import InfoCard from "../../InfoCard";

export interface Cards {
  icon: string
  text: string
  title: string
}

export interface Info {
  title: string
  keywords: string
  text: string
  cards: Array<Cards>
}

export interface Props {
  ourMethod: Info
}

export default function OurMethod({
  ourMethod: { title, keywords, text, cards}}: Props) {

  return (
    <section className="our-method section-container">
      <h3>Nuestro Método</h3>
      <div className="title-contain">
        <H2 whiteText={title} cyanText={keywords} />
      </div>
      <p className="our-method-text">{text}</p>
      <div className="our-method-cards">
        {cards.map((infoCard, index) => {
          return (
            <InfoCard
              key ={`om-card-${index}`}
              icon={infoCard.icon}
              title={infoCard.title}
              text={infoCard.text}
            />
          );
        })}
      </div>
    </section>
  );
}
