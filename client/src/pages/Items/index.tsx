import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcumb from 'components/Breadcrumb';
import ItemCard from 'components/ItemCard';
import ItemsService from 'services/Items.service';
import useQuery from 'utils/routing';
import Loader from 'components/Loader';
import Props from './items.interface';
import styles from './styles.module.scss';

export default function Items() {
  const [items, setItems] = useState<Props['items']>([]);
  const [breadcumbs, setBreadcumbs] = useState<Props['categories']>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const query = useQuery().get('search');
  const history = useHistory();

  useEffect(() => {
    if(query){
      setLoading(true);
      ItemsService(query).then((value) => {
        setItems(value.items);
        setBreadcumbs(value.categories);
        setLoading(false);
      }, ()  => {
        history.push(`/error`);
      });
    }
    
  }, [query, history]);

  if (items.length > 0 && !loading) {
    return (
      <>
        {breadcumbs.length > 0 && <Breadcumb breadcumbs={breadcumbs} />}
        <section className={styles.content}>
          <ul className={styles.wrapper}>
            {items.map((item) => (
              <li key={`item-${item.id}`}>
                <ItemCard {...item} />
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
  return <Loader />;
}
