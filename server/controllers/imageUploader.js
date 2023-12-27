const cloudinary = require("../config/cloudinaryConfig");
const fs = require("fs");

const imageUpload = async (req, res) => {
  //  console.log("REQUEST HERE: ", req);
  // const uploader = async (path) => await cloudinary.uploads(path, "samples");

  // if (req.method === "POST") {
  //   const urls = [];
  //   const files = req.files;
  //   for (const file of files) {
  //     const path = file.path;
  //     const newPath = await uploader(path);
  //     urls.push(newPath);
  //     fs.unlinkSync(path);
  //   }

  //   res.status(200).json({
  //     message: "images uploadedsuccessfully",
  //     data: urls,
  //   });
  // } else {
  //   res.status(405).json({
  //     err: "method not allowed",
  //   });
  // }
  console.log("HERE WE ARE: ", req);
};

module.exports = { imageUpload };
