import { Link } from 'react-router-dom';
import Icon from 'assets/images/ic_shipping.png';
import Icon2x from 'assets/images/ic_shipping@2x.png';
import Props from './itemCard.interface';
import styles from './styles.module.scss';

export default function ItemCard({
  picture, price, id, title, free_shipping,
}: Props) {
  return (
    <div className={styles.content}>
      <img src={picture} alt="Item" className={styles.image} />
      <div className={styles.description}>
        <div className={styles.price}>
          <span>
            {price.currency}
            {' '}
            {price.amount}
            {price.decimals}
            {' '}

          </span>
          {free_shipping && <img srcSet={`${Icon}, ${Icon2x} 2x`} alt="Free Shipping" />}
        </div>
        <Link to={`/items/${id}`}>
          <h1 className={styles.title}>{title}</h1>
        </Link>
      </div>
      <div className={styles.ciudad}>Una Ciudad</div>
    </div>
  );
}
