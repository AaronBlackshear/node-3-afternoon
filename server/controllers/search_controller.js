const swag = require('../models/swag');

module.exports = {
    search: (req,res,next) => {
        const { category } = req.query;

        if(!category){
            res.status(200).json(swag);
        }

        let filtered = swag.filter(swag => swag.category === category);

        res.status(200).json(filtered);
    }
}