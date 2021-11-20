const multer = require("multer");

const fileFilter = (req, files, cb) => {
  if (files.mimetype === "image/jpeg" || files.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ message: "unsupported file format" }, false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({
 storage: storage,
 fileFilter: fileFilter
});

module.exports = upload;
