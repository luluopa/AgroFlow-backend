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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./usuario/models/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const env = process.env.NODE_ENV;
app.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.status(200).send(JSON.stringify({ "Success": "Your first app" }));
}));
app.get('/db/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.default.authenticate();
        response.status(200).send(JSON.stringify({ "Connection status to the database: ": "OK" }));
    }
    catch (error) {
        response.status(500).send(JSON.stringify({ "Connection status to the database": "FAIL" }));
    }
}));
if (env !== 'test') {
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}
exports.default = app;
