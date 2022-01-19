import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux'
import { addList } from '../../redux/listsRedux'

const ListForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, listId: props.listId }));
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.ListForm}>  
    <div className={styles.ListFormInput}>
      <span>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <div className={styles.ListFormInput}>
      <span>Description:</span> <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
    </div>
    <div className={styles.ListFormButton}>
      <Button>Add List</Button>
    </div>
    </form>
  );
};

export default ListForm;