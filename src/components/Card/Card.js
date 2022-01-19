import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux'
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();
  
  const markFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  }

  const remove = () => {
    dispatch(removeCard(props.id))
  }

  return (
    <li className={styles.card}>
    <div>{props.title}</div>
    <div>
      <button onClick={markFavorite} className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isFavorite)}></button>
      <button onClick={remove} className={clsx("fa fa-trash", styles.button)}></button>
    </div>
    </li>
  )
}

export default Card;