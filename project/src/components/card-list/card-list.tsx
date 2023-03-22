import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offersData: Offer[];
}

function CardList({offersData}: CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((offer)=> <Card key={offer.id} offerData={offer} />)}
    </div>
  );
}

export default CardList;
