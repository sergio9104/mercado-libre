import Searcher from 'components/Searcher';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/Logo_ML.png';
import Logo2x from 'assets/images/Logo_ML@2x.png';
import styles from './styles.module.scss';

export default function SearchBar() {
  return (
    <header role="banner" className={styles.header}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <a className={styles.skipContent} href="#root-app" aria-label="Ir al contenido principal"><span className={styles.skipContentText}>Ir al contenido principal</span></a>
          <Link to="/" className={styles.logo} aria-label="Mercado Libre Colombia - Donde comprar y vender de todo">
            <img srcSet={`${Logo}, ${Logo2x} 2x`} alt="Logo Mercadolibre" />
          </Link>
          <Searcher />
        </div>
      </div>
    </header>
  );
}
