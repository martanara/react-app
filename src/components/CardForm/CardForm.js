import styles from './CardForm.module.scss'
import {useState} from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title }, props.columnId);
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