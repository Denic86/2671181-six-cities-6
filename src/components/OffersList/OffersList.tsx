import OfferCard from '../card/card';
import { useState } from 'react';

type Props = {
  cards: Card[];
};

function OffersList({ cards }: Props): JSX.Element {
  const [, setActiveOffer] = useState<Card | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <OfferCard
          card={card}
          setActiveOffer={setActiveOffer}
          key={card.id}
        />
      ))}
    </div>
  );
}

export default OffersList;
