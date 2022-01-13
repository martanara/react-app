import styles from './CardForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux'
import { addCard } from '../../redux/store'

const CardForm = props => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ title, columnId: props.columnId }));
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
    <div className={styles.cardFormInput}>
      <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}/>
    </div>
    <div className={styles.cardFormButton}>
      <Button>Add card</Button>
   </div>
    </form>
  );
};

export default CardForm;