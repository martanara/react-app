// import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import styles from './ColumnForm.module.scss';
import { useDispatch } from 'react-redux'
import { addColumn } from '../../redux/store'

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }));
    setTitle('');
    setIcon('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>  
    <div className={styles.columnFormInput}>
      <span>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <div className={styles.columnFormInput}>
      <span>Icon:</span> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
    </div>
    <div className={styles.columnFormButton}>
      <Button secondary>Add column</Button>
    </div>
    </form>
  );
};

export default ColumnForm;