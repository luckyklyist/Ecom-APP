import express from "express";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3004;


app.get('/healthCheck', (_, res) => res.send({ message: "Server is running" }));

app.listen(PORT, () => {
    console.log(`Server running at the PORT ${PORT}`)
})

