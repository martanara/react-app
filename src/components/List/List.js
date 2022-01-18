import styles from './List.module.scss';
import { useSelector } from 'react-redux'
import ColumnForm from '../ColumnForm/ColumnForm'
import Column from '../Column/Column'
import { getColumnsByList, getListId } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {

  const { listId } = useParams();

  const listData = useSelector(state => getListId(state, listId))
  const columns = useSelector(state => getColumnsByList(state, listId))

  console.log('listData', listData)

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map(column => <Column 
          key={column.id}  
          {...column} />
        )}
      </section>
      <ColumnForm listId={listData.id}/>
    </div>
  );

};

export default List;