import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const method = req.method;
  if (method === 'POST') {
    type MessageType = { name: string; email: string; message: string };
    const { name, email, message }: MessageType = req.body;

    // validate input
    if (
      !name ||
      name.trim() === '' ||
      !email ||
      !email.includes('@') ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid data' });
    }

    const newMessage = { email, name, message };
    console.log(newMessage);
    res.status(201).json({ message:'Successfully stored message', newMessage });

    // const { MongoClient } = require('mongodb');
    // const uri =
    //   'mongodb+srv://root:709aa709@firsttestproject.qsdo637.mongodb.net/?retryWrites=true&w=majority';
    // const client = new MongoClient(uri);
    // client.connect((err: any) => {
    //   const collection = client.db('test').collection('devices');
    //   // perform actions on the collection object
    //   client.close();
    // });
  }
}
