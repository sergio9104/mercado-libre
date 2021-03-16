import axios from "axios";

class Search {
    api: string;
    constructor() {
        this.api = 'https://api.mercadolibre.com'; 
    }

    async items(search): Promise<any> {
        return await axios
        .get(`${this.api}/sites/MLA/search?q=${search}`)
        .catch((err) => {
            console.error(err);
        });
    }

    async itemDetail(id): Promise<any> {
        return await axios
        .get(`${this.api}/items/${id}`)
        .catch((err) => {
            console.error(err);
        });;
    }

    async itemDescription(id): Promise<any> {
        return await axios
        .get(`${this.api}/items/${id}/description`)
        .catch((err) => {
            console.error(err);
        });
    }
}

export default new Search();