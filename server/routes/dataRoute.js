const express = require('express');
const { addData, getData } = require('../controllers/dataController');

const dataRouter = express.Router();

dataRouter.post('/add-data',addData)
dataRouter.get('/get-data',getData)


module.exports = dataRouter;