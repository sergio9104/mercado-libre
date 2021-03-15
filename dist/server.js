"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
/*
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333, () => {
  console.log('Server started');
});

*/ 
//# sourceMappingURL=server.js.map