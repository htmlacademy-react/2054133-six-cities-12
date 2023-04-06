import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store';
import Card from '../card/card';

type CardListProps = {
  className: string;
  cardClassName: string;
  handleCardOver?: (id: number) => void;
}

function CardList({className, cardClassName, handleCardOver}: CardListProps) {

  const offersList = useAppSelector((state) => state.offersListCopy);
  const nearbyOffersList = useAppSelector((state) => state.nearbyOffersList);

  const param = useParams();
  const isMainScreen = () => !param.id;

  return (
    <div className={className}>
      {
        isMainScreen()
          ? offersList.map((offer)=> <Card key={offer.id} offerData={offer} cardClassName={cardClassName} handleCardOver={handleCardOver} />)
          : nearbyOffersList?.map((offer)=> <Card key={offer.id} offerData={offer} cardClassName={cardClassName} handleCardOver={handleCardOver} />)
      }
    </div>
  );
}

export default CardList;
