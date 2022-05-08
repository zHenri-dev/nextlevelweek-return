"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("./mongodb");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    if (!type || !comment)
        return res.status(400).send();
    await mongodb_1.feedbacks.create({
        type,
        comment,
        screenshot,
        createdAt: new Date().getTime(),
    });
    return res.status(201).send();
});
