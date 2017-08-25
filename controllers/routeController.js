const express = require('express');
const router = express.Router();
const Routes = require('../models/routes.js');
const getGeolocation = require('../bin/api.js');

/////////////////////////////////////////////////////
//     INDEX
/////////////////////////////////////////////////////
router.get('/', (req, res)=>{
  Routes.find({}, (err, foundRoutes)=>{
    res.json(foundRoutes);
  });
});

/////////////////////////////////////////////////////
//     CREATE
/////////////////////////////////////////////////////
router.post('/', (req, res)=>{
  console.log(req.body);
    Routes.create(req.body, (err, createdRoutes)=>{
      res.json(createdRoutes);
    });
});

/////////////////////////////////////////////////////
//     DELETE
/////////////////////////////////////////////////////
router.delete('/:id', (req, res)=>{
  Routes.findByIdAndRemove(req.params.id, (err, deletedRoute)=>{
    res.json(deletedRoute);
  });
});

/////////////////////////////////////////////////////
//     UPDATE
/////////////////////////////////////////////////////
router.put('/:id', (req, res)=>{
  Routes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRoute)=>{
    res.json(updatedRoute);
  });
});

// export router
module.exports = router;
