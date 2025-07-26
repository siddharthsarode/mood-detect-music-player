const express = require("express");
const multer = require("multer");
const uploadFile = require("../services/storage.service");
const SongModel = require("../models/song.model");

const router = express.Router();

// multer config for handle file data (middleware)
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("audio"), async (req, res) => {
  try {
    const { title, author, mood } = req.body;

    if (!title || !author || !mood)
      return res.status(400).json({ message: "all field required" });

    // upload the file on cloud
    const fileData = await uploadFile(req.file);

    const newSong = new SongModel({
      title,
      author,
      mood,
      audio: fileData.url,
    });

    await newSong.save();

    res.status(201).json({ message: "success", song: newSong });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { mood } = req.query;

    if (!mood)
      return res.status(400).json({ message: "Please provide parameter!" });

    const songs = await SongModel.find({ mood: mood }).sort({
      createdAt: -1,
    });

    if (!songs || songs.length <= 0)
      return res.status(204).json({ message: "No content found" });

    return res.status(200).json({ data: songs, message: "successfully " });
  } catch (err) {
    console.log(e);
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
