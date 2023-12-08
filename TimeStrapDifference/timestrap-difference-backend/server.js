const express = require('express');
const moment = require('moment');
const cors = require('cors');

const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Credentials",
    ],
  };
  
  app.use(cors(corsOptions));

app.post('/calculate-difference', (req, res) => {

  const { timestamp1, timestamp2 } = req.body;

  const time1 = new Date(timestamp1);
  const time2 = new Date(timestamp2);

  const differenceInSeconds = Math.abs((time1 - time2) / 1000);

  res.json({ differenceInSeconds });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});