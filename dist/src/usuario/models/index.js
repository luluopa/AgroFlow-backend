"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const env_1 = __importDefault(require("../../config/env"));
const db_config_1 = __importDefault(require("../../config/db.config"));
let information = db_config_1.default[env_1.default];
const DB_CONNECT = new sequelize_1.Sequelize(information['DATABASE_NAME'], information['DATABASE_USER'], information['DATABASE_PASS'], {
    host: information['DB_HOST'],
    dialect: 'postgres'
});
exports.default = DB_CONNECT;
