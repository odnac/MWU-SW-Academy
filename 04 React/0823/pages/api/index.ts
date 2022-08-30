import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        name: "odnac",
        email: "cancode777@gamil.com",
        query: req.query,
    })
}