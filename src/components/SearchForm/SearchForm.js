import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'

const SearchForm = () => {

  const dispatch = useDispatch();
  const [searchString, setsearchString] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
    setsearchString('')
  }

  useEffect(() => {
    return () => {
      dispatch({ type: 'UPDATE_SEARCHSTRING', payload: '' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm} >
      <TextInput placeholder="Search..." type="text" value={searchString} onChange={e => setsearchString(e.target.value)}/>
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;