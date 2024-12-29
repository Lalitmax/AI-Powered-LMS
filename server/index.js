const connectDB = require('./config/db');
const express = require('express')
const dotenv = require('dotenv')
const courseRoutes = require('./routes/courseRoutes')
const app = express()
const port = process.env.PORT;

app.use(express.json());
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', courseRoutes);

app.listen(port, () => {
  console.log(`Course app listening on port ${port}`)
})