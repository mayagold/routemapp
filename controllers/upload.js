const express = require('express');
const router = express.Router();
const multer  = require('multer');

// const upload = multer({ dest: 'uploads/' });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '~/upload')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
//
const upload = multer({ dest: __dirname + '../public/routes' })


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

router.post('/', upload.any(), function(req, res, next) {
  console.log('in the /upload POST')
  console.log('Body', req.body);
  console.log('files', req.files);
  res.end();
});

// router.post('/', function(req,res){
//   console.log('/upload POST req.body',req.body);
//   multer({ dest: './public/routes/'}).single(req.body.path + req.body.basename)
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// });

// router.post('/', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })




// export router
module.exports = router;
