import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const port = 2001;
import todoRouter from './routes/todoroutes';



app.use(express.json());
app.use(cors());

mongoose.connect('link', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

app.use("/api/todos",todoRouter);


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})


// NSArHZFl5t64cMF0
