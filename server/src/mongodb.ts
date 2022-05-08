import { connect, model, Schema } from 'mongoose';

const connectString = process.env.DATABASE_URL! || "mongodb+srv://zHenri:jUXNAPXKHJtLQJrz@cluster0.t2mw0.mongodb.net/feedback-widget?retryWrites=true&w=majority";

connect(connectString).then(() => {
  console.log(`\x1b[92mSuccessfully connected to the database. \x1b[0m`);
}).catch(() => {
  console.log(`\x1b[91mAn error occurred while connecting to database. \x1b[0m`);
});

const FeedbackSchema = new Schema({
  type: { type: String, required: true },
  comment: { type: String, required: true },
  screenshot: { type: String, required: false },
  createdAt: { type: Number, required: true },
  from: { type: String, required: true }
});

export const feedbacks = model("Feedback", FeedbackSchema);