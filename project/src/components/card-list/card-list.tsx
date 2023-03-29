import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offersData: Offer[];
  className: string;
  cardClassName: string;
  handleCardOver?: (id: number) => void;
}

function CardList({offersData, className, cardClassName, handleCardOver}: CardListProps) {

  return (
    <div className={className}>
      {offersData.map((offer)=> <Card key={offer.id} offerData={offer} cardClassName={cardClassName} handleCardOver={handleCardOver} />)}
    </div>
  );
}

export default CardList;
