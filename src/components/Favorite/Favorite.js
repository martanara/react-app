import PageTitle from '../PageTitle/PageTitle'
import styles from './Favorite.module.scss';
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux'
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state));

  return (
    <>
      <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
          </ul>
        </article>
    </>
  );
};

export default Favorite;