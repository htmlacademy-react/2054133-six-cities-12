import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offersData: Offer[];
  className: string;
  cardClassName: string;
}

function CardList({offersData, className, cardClassName}: CardListProps) {

  return (
    <div className={className}>
      {offersData.map((offer)=> <Card key={offer.id} offerData={offer} cardClassName={cardClassName}/>)}
    </div>
  );
}

export default CardList;
