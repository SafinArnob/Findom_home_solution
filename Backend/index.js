const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const PropertyRouter = require('./Routes/PropertyRouter'); // Import PropertyRouter

require('dotenv').config();
require('./config/db');

const PORT = process.env.PORT || 8080;



app.use(bodyParser.json());
app.use(cors());

app.use('/auth', AuthRouter);
app.use('/properties', PropertyRouter); // Use the PropertyRouter

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
