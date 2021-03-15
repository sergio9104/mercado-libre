import Loader from "components/Loader";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemService from 'services/Item.service';
import Props from './itemDetails.interface';
import styles from './styles.module.scss';

export default function ItemDetails() {
    const [detail, setDetail] = useState<Props['item']>();
    const [loading, setLoading] = useState<boolean>(true);
    let { id } = useParams<{id: string}>();

    useEffect(() => {
        ItemService(id).then((value) => {
           setDetail(value.item);
           setLoading(false);
        });
    }, [id]);

    if (detail && !loading) {
        return (
            <section className={styles.content}>
                <div className={styles.wrapper}>
                    <article className={styles.left}>
                        <img className={styles.picture} src={detail.picture} alt="Producto"/>
                        <div className={styles.title}>Descripción del producto</div>
                        <p className={styles.descriptionText}>{detail.description}</p>
                    </article>
                    <div className={styles.right}>
                        <div className={styles.quantity}>{detail.condition} - {detail.sold_quantity} Vendidos</div>
                        <h1 className={styles.name}>{detail.title}</h1>
                        <div className={styles.price}>{detail.price.currency} {detail.price.amount}<span className={styles.decimal}>{detail.price.decimals}</span></div>
                        <button className={styles.buy}>Comprar</button>
                    </div>
                </div>
            </section>
        );
    } else {
        return <Loader />
    }  
    
}