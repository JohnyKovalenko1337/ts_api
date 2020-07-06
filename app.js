"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const todous_1 = __importDefault(require("./routes/todous"));
const app = express();
app.use(body_parser_1.default.json());
app.use(todous_1.default);
app.listen({ port: 3000 });
