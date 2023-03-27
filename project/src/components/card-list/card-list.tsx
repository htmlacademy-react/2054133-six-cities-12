import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offersData: Offer[];
  className: string;
  cardClassName: string;
  HandleCardOver?: (arg0: number | string) => void;
}

function CardList({offersData, className, cardClassName, HandleCardOver}: CardListProps) {

  return (
    <div className={className}>
      {offersData.map((offer)=> <Card key={offer.id} offerData={offer} cardClassName={cardClassName} HandleCardOver={HandleCardOver} />)}
    </div>
  );
}

export default CardList;
