import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors({
  origin: "https://zhenri-feedback-widget.vercel.app"
}));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});