import Props from 'pages/Items/items.interface';

export default async function ItemsService(search: string | null): Promise<Props> {
    return await fetch(`/items?q=${search}`).then((response) => {
        return response.json();
    });
}