const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadPhoto = async (file) => {
  const { createReadStream, mimetype } = await file;

  if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
    throw new ApolloError("Only JPEG and PNG images are allowed");
  }

  const newImgName = `${uuidv4()}`;
  const fileExtension = ".jpg";

  // Create the readstream and write the file from the request body to the server
  const stream = createReadStream();
  const pathName = path.join(
    __dirname,
    "../../tempUploads",
    newImgName + fileExtension
  );
  stream.pipe(fs.createWriteStream(pathName));

  // Create a promise that resolves when the file has been written to the server or errors out
  const fileWritePromise = new Promise((resolve, reject) => {
    stream
      .on("end", async () => {
        console.log("Saved photo");
        resolve({ ok: true });
      })
      .on("error", (err) => {
        console.log("Error saving photo", err);
        reject({ ok: false });
      });
  });

  const fileWriteResult = await fileWritePromise;
  if (!fileWriteResult?.ok) {
    throw new ApolloError("Could not upload photo");
  }

  // Upload the file to Cloudinary, promise returns a secure_url
  const cloudinaryRes = new Promise(async (resolve, reject) => {
    try {
      const cloudinaryRes = await cloudinary.uploader
        .upload(
          path.join(__dirname, "../../tempUploads", newImgName + fileExtension),
          {
            public_id: newImgName,
          }
        )
        .then((res) => res);

      const { secure_url } = cloudinaryRes || {};
      if (!secure_url) {
        throw new Error("Could not upload photo to cloudinary");
      }
      resolve({ ok: true, data: { secure_url } });
    } catch (err) {
      console.log(err);
      reject({ ok: false, error: { err } });
    }
  });

  const cloudinaryData = await cloudinaryRes;
  if (!cloudinaryData?.ok) {
    throw new ApolloError("Could not upload photo, cloud upload failed");
  }

  // Cleanup the temp file
  const deleteFilePromise = new Promise((resolve, reject) => {
    fs.unlink(
      path.join(__dirname, "../../tempUploads", newImgName + fileExtension),
      (err) => {
        if (err) {
          reject({ ok: false, error: { err } });
        }
        console.log("File deleted");
        resolve({ ok: true });
      }
    );
  });
  const deleteFileResult = await deleteFilePromise;

  if (!deleteFileResult?.ok) {
    console.error("Could not delete file after uploading to cloudinary");
  }

  return {
    url: cloudinaryData?.data?.secure_url,
  };
};

module.exports = uploadPhoto;
