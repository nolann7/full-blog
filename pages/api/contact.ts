import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
interface Data {}

export type MessageType = {
  name: string;
  email: string;
  message: string;
  id?: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const method = req.method;
  if (method === 'POST') {
    const { name, email, message }: MessageType = req.body;

    // validate input
    if (
      !name ||
      name.trim() === '' ||
      !email ||
      !email.includes('@') ||
      !message ||
      message.trim() === '' ||
      message.length > 500
    ) {
      return res.status(422).json({ message: 'Invalid data' });
    }

    const newMessage: MessageType = { email, name, message };

    // send data to db
    const uri =
      'mongodb+srv://alex:h8LVQbrnzx0rEQ41@firsttestproject.qsdo637.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri);

    try {
      await client.connect();
    } catch (error) {
      res.status(500).json({ message: 'Failed to connect to database' });
      return;
    }
    const collection = client.db('full-blog').collection('messages');

    try {
      const result = await collection.insertOne(newMessage);
      newMessage.id = result.insertedId.toString();
    } catch (error) {
      client.close();
      return res
        .status(500)
        .json({ message: 'Failed to insert message to database' });
    }
    client.close();
    res
      .status(201)
      .json({ message: 'message successfully stored! Thank you', newMessage });
  }
}
