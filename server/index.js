import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

// Database Connection
// TODO: Further research into connection issues
// 12/25: replaced localhost with 0.0.0.0 (WAMP server?)
const connectionString = 'mongodb://0.0.0.0:27017/cfbPickemDB';
const port = process.env.port || 5000;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
    .catch((error) => console.log(`Error occurred: ${error.message}`));
mongoose.set('strictQuery', false);