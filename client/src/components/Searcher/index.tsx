import Search from 'assets/images/ic_Search.png';
import Search2x from 'assets/images/ic_Search@2x.png';
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Searcher() {
  const history = useHistory();
  const [inputValue, setInputValue] = useState<string>('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue) history.push(`/items?search=${inputValue}`);
  }

  return (
    <form onSubmit={submit} role="search" className={styles.form}>
      <input className={styles.input} type="text" aria-label="Ingresa lo que quieras encontrar" placeholder="Nunca dejes de buscar" autoFocus autoCapitalize="off" autoCorrect="off" spellCheck="false" autoComplete="off" value={inputValue} onChange={onChange} />
      <button type="submit" className={styles.button}>
        <img srcSet={`${Search}, ${Search2x} 2x`} alt="Buscar" />
      </button>
    </form>
  );
}
