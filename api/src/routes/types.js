const { Router } = require('express');
const {Types} = require('../db');
const router = Router();
const {getApiDataTypes} = require("./utils")

router.get('/', async (req, res, next) =>{
    try {
        const types = await getApiDataTypes()
        return res.json(types)
    } catch (error) {
        next(error)
    }
});

module.exports = router;
