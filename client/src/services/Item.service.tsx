import Props from 'pages/ItemDetails/itemDetails.interface';

export default async function ItemService(id: string): Promise<Props> {
  return await fetch(`/items/${id}`).then((response) => response.json());
}
