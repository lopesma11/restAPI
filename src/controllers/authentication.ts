import { Express } from "express";

import { getUsersByEmail } from "db/users";

export const register = async (req: Express.Request, res: Express.Response) => {
    try {
        const {email, password, username} = req.body

        if 
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}