//install dependencies
const express = require('express');
const router = express.Router();
const { findById } = require('../models/band');
const Band = require('../models/band');


// Get route for the band /
router.get('/', (req, res) => {
    Band.find({}, (err, bands) => {
        if(err) {
            console.error(`Index route is not working\n${err}`);
            res.status(500).json({error: `Error in the band's Index route`})
        }
        res.json({bands})
    })
})

//detail GET band '/:id'
router.get('/:id', (req, res) => {
    Band.findById(req.params.id, (err, user) => {
        if(err) {
            console.error(`Oh No! Error in users Detail router:\n${err}`);
            res.status(500).json({error: `Error in users Detailroute `})
        }
        res.json({user});
    })
})

//create POST band '/'
router.post('/', (req,res) => {
    console.log(req.body)
    Band.create(req.body, (err, band) => {
        if(err) {
            console.error(`Create route is not working\n${err}`);
            res.status(500).json({error: `Error in the band's Create route`})
        }
        res.json({band})
    })
})
//update: put route for the band /:id
router.put('/:id', (req, res) => {
    Band.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, user) => {
            if(err) {
                console.error(`Oh No! Error in users Update Route:\n${err}`);
                return res.status(500).json({error: `Error in users Update route `})
            }
            res.json({user});
        }
    )
})

//delete band '/:id'

module.exports = router;