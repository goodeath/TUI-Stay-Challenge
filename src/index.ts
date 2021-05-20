import express, { Request, Response } from 'express';

const PORT = 4000;
const app = express();

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
