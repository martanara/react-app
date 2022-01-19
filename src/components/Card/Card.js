import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux'
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(toggleCardFavorite(props.id));
  }

  return (
    <li className={styles.card}>{props.title}
      <button onClick={handleClick} className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isFavorite)}></button>
    </li>
  )
}

export default Card;