"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
class ItemsController {
    getItems(param) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itemsData = yield models_1.default.items(param);
                const author = {
                    name: 'Sergio',
                    lastname: 'Valencia'
                };
                const categories = () => {
                    try {
                        return itemsData.data.filters.find((filter) => {
                            return filter.id === "category";
                        }).values.map((value) => {
                            return value.name;
                        });
                    }
                    catch (err) {
                        console.error(err);
                        return ([]);
                    }
                };
                const items = [];
                for (let x = 0; x < 4; x++) {
                    const itemData = itemsData.data.results[x];
                    if (itemData) {
                        const priceInfo = itemData.prices.prices[0];
                        items.push({
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
                        });
                    }
                }
                const request = {
                    author,
                    categories: categories(),
                    items
                };
                return request;
            }
            catch (err) {
                console.error(err);
                return (err);
            }
        });
    }
    getDetail(param) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itemsDetail = yield models_1.default.itemDetail(param);
                const itemsDescription = yield models_1.default.itemDescription(param);
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
                };
            }
            catch (err) {
                console.error(err);
                return (err);
            }
        });
    }
}
exports.default = new ItemsController();
//# sourceMappingURL=index.js.map