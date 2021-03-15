"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const usersRouter = express_1.Router();
usersRouter.get('/', (req, res) => {
    controllers_1.default.getItems(req.query.q).then((value) => {
        res.send(value);
    });
});
usersRouter.get('/:id', (req, res) => {
    controllers_1.default.getDetail(req.params.id).then((value) => {
        res.send(value);
    });
});
exports.default = usersRouter;
//# sourceMappingURL=items.routes.js.map