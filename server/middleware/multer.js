const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads",
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ message: "unsupported file format" }, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;

/*const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    forder: "DEV",
  },
});

const uploader = multer({ storage: storage });

module.exports = uploader;
*/
