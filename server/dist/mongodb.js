"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbacks = void 0;
const mongoose_1 = require("mongoose");
const connectString = process.env.DATABASE_URL;
(0, mongoose_1.connect)(connectString).then(() => {
    console.log(`\x1b[92mSuccessfully connected to the database. \x1b[0m`);
}).catch(() => {
    console.log(`\x1b[91mAn error occurred while connecting to database. \x1b[0m`);
});
const FeedbackSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    comment: { type: String, required: true },
    screenshot: { type: String, required: false },
    createdAt: { type: Number, required: true },
});
exports.feedbacks = (0, mongoose_1.model)("Feedback", FeedbackSchema);
