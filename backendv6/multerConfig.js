const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage }).fields([
  { name: 'dataset' },
  { name: 'readMeFile' },
  { name: 'rapport' },
  { name: 'demo' },
  { name: 'sourceCode' }
]);

module.exports = function(req, res, next) {
  upload(req, res, function(err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error uploading files', error: err.message });
    }
    next();
  });
};
