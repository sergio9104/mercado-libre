import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
    breadcumbs: string[];
}

export default function Breadcrumb({ breadcumbs }: Props) {
  function breadcumbRender(breadcumb: string, index: number): ReactNode {
    return (
      <span key={breadcumb}>
        {index !== 0 && '<' }
        {' '}
        {breadcumb}
      </span>
    );
  }

  return (
    <nav className={styles.content}>
      <div className={styles.wrapper}>
        {breadcumbs.map(breadcumbRender)}
      </div>
    </nav>
  );
}
