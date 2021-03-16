import Props from 'pages/Items/items.interface';

export default function ItemsService(search: string | null): Promise<Props> {
  return fetch(`/items?q=${search}`)
  .then((response) => response.json())
  .catch((err) => {
    console.error(err);
  });
}
