// const multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); 
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// var upload = multer({ storage: storage,
//   fileFilter: (req, file, cb) => {
//   // ... your file filter logic (optional)
//   cb(null, true); // Allow all files by default (adjust for specific file types if needed)
// },
// limits: {
//   fileSize: 5 * 1024 * 1024, // 5 MB
// }
// });

// module.exports = upload.single('solutionData'); 
