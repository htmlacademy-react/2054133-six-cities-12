import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store';
import Card from '../card/card';

type CardListProps = {
  className: string;
  cardClassName: string;
  handleCardOver?: (id: number) => void;
}

function CardList({className, cardClassName, handleCardOver}: CardListProps) {

  const OffersList = useAppSelector((state) => state.offersList);
  const nearbyOffersList = useAppSelector((state) => state.nearbyOffersList).slice(-3);

  const param = useParams();
  const isMainScreen = () => {
    if (!param.id) {
      return true;
    }
    if (param) {
      return false;
    }
  };

  return (
    <div className={className}>
      {isMainScreen() && OffersList.map((offer)=> <Card key={offer.id} offerData={offer} cardClassName={cardClassName} handleCardOver={handleCardOver} />)}
      {!isMainScreen() && nearbyOffersList.map((offer)=> <Card key={offer.id} offerData={offer} cardClassName={cardClassName} handleCardOver={handleCardOver} />)}
    </div>
  );
}

export default CardList;
