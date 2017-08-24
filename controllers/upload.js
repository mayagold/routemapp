const express = require('express');
const router = express.Router();
const multer  = require('multer');

const upload = multer({ dest: 'uploads/' });


// fileupload does not work!!!!! as documented
// var fileupload = require('fileupload').createFileUpload('uploadDir').middleware
//
//  router.post('/', fileupload, function(req, res) {
//    console.log('/upload POST route', req.body.files)
//    // files are now in the req.body object along with other form fields
//    // files also get moved to the uploadDir specified
//  })
//
//  // fileupload.put('path-to-file.gif', function(error, file) {
//  router.put('/', fileupload, function(req, res) {
//    console.log('/upload PUT route', req.body)
//
//    // file is an object with information about the uploaded file
//    // See below for the contents of this object
//  })
router.post('/profile', upload.single('text'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

router.post('/', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})




// export router
module.exports = router;
