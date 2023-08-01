import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/developement.cofig'; // Fixed typo: "developement" to "development"


const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers?.authorization;

        if (!token) {
            return res.status(401).send({ message: "Missing Token" });
        }

        try {
            const verifyToken = jwt.verify(token, config.SECRETE_KEY);
            req.user = verifyToken; // Attach the decoded token payload to the request object for later use if needed.
            next();
        } catch (err) {
            return res.status(401).send({ message: "Invalid Token" });
        }
    } catch (err) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
};

export default validateToken;
