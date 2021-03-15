import axios from "axios";

class Search {
    api: string;
    constructor() {
        this.api = 'https://api.mercadolibre.com'; 
    }

    async items(search){
        return await axios.get(`${this.api}/sites/MLA/search?q=${search}`);
    }

    async itemDetail(id) {
        return await axios.get(`${this.api}/items/${id}`);
    }

    async itemDescription(id) {
        return await axios.get(`${this.api}/items/${id}/description`);
    }
}

export default new Search();