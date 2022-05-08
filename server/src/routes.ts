import express from 'express';
import { feedbacks } from './mongodb';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  console.log(req)
  const { type, comment, screenshot } = req.body;
  if (!type || !comment) return res.status(400).send();

  await feedbacks.create({
    type,
    comment,
    screenshot,
    createdAt: new Date().getTime(),
    from: req.headers['x-forwarded-for']
  });

  return res.status(201).send();
});