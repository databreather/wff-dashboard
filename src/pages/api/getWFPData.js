// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "./mongoDB";

export default async function handler(req, res) {

  try{
    const db = await connectToDatabase()

    const data = await db.collection('market-wfp').findOne()
    res.status(200).json(data)
  }catch(err){
    console.log(err)
    res.status(500).json({err})
  }

}


