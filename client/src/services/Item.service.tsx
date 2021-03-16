import Props from 'pages/ItemDetails/itemDetails.interface';

export default function ItemService(id: string): Promise<Props> {
  return fetch(`/items/${id}`)
  .then((response) => response.json())
  .catch((err) => {
    console.error(err);
  });
}
