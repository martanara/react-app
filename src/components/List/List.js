import styles from './List.module.scss';
import { useSelector } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm';
import Column from '../Column/Column';
import { getColumnsByList } from '../../redux/columnsRedux';
import { getListId } from '../../redux/listsRedux';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';

const List = () => {

  const { listId } = useParams();

  const listData = useSelector(state => getListId(state, listId))
  const columns = useSelector(state => getColumnsByList(state, listId))

  if(!listData) return <Navigate to="/"/>
    return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <SearchForm />
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