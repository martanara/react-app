// import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import styles from './ColumnForm.module.scss';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>  
    <div>
      <span>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <div>
      <span>Icon:</span> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
    </div>
    <div className={styles.columnFormButton}>
      <Button>Add column</Button>
    </div>
    </form>
  );
};

export default ColumnForm;