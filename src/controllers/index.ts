import Api from "../models";
import Items from "interfaces/items.interface";
import Detail from "interfaces/detail.interface";

class ItemsController {
    async getItems(param: any): Promise<Items> {
        try {
            const itemsData =  await Api.items(param);
            const author = {
                name: 'Sergio',
                lastname: 'Valencia'
            }
            const categories = () => {
                try {
                    return itemsData.data.filters.find((filter) => {
                        return filter.id === "category";
                    }).values.map((value) => {
                        return value.name;
                    });
                } catch (err) {
                    console.error(err);
                    return([]);
                }  
        }

            const items = [];
            
            for(let x = 0; x < 4; x++){
                const itemData = itemsData.data.results[x];
                if (itemData) {
                    const priceInfo = itemData.prices.prices[0];
                    items.push(
                        {
                            id: itemData.id,
                            title: itemData.title,
                            price: {
                                currency: priceInfo.currency_id,
                                amount: priceInfo.amount,
                                decimals: 0
                            },
                            picture: itemData.thumbnail,
                            condition: itemData.condition,
                            free_shipping: itemData.shipping.free_shipping
                        }, 
                    )
                }
            }

            const request: Items =  {
                author,
                categories: categories(),
                items
            }

            return request;            
        }
        catch (err) {
            console.error(err);
            return(err);
        } 
    }
    
    async getDetail(param: any): Promise<Detail>{
        try {                
            const itemsDetail =  await Api.itemDetail(param);
            const itemsDescription =  await Api.itemDescription(param);
            const itemsDetailData = itemsDetail.data;
            const itemsDescriptionData = itemsDescription.data;

            return {
                author: {
                name: 'Sergio',
                lastname: 'Valencia'
                },
                item: {
                    id: itemsDetailData.id,
                    title: itemsDetailData.title,
                    price: {
                        currency: itemsDetailData.currency_id,
                        amount: itemsDetailData.price,
                        decimals: 0,
                    },
                    picture: itemsDetailData.thumbnail,
                    condition: itemsDetailData.condition,
                    free_shipping: itemsDetailData.shipping.free_shipping,
                    sold_quantity: itemsDetailData.sold_quantity,
                    description: itemsDescriptionData.plain_text
                }
            }
        }
        catch (err) {
            console.error(err);
            return(err);
        } 
    }
}

export default new ItemsController();