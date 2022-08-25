import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json"

export default function hanlder(req: NextApiRequest, res: NextApiResponse) {
    if(req.method==="GET") {
        const id = parseInt(req.query.id as string)
        const post = data.find((item) => item.id === id)
        if(post) {
            res.status(200).json(post)
        } else {
            res.status(404).send({ error: "not found", status: 404 })
        }
    } else {
        res.status(405).send({ error: "method not allow", status: 405 })
    }
}