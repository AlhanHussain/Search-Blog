const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dataRouter = require('./routes/dataRoute');
require('dotenv/config')



//app config
const app = express();
const PORT = process.env.PORT || 5000;


//middleware
app.use(express.json());
app.use(cors());


//db config
connectDB()




//route
app.get('/', (req, res) => {
    res.status(200).send('API WORKING')
})

//api
app.use('/api',dataRouter)


//listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
