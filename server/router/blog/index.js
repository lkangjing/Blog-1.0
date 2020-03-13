module.exports = app => {
  const express = require("express");
  const blog = require("../../models/Blog");
  const router = express.Router({
    mergeParams: true
  });
  router.post("/addBlog", async (req, res) => {
    console.log(req.body);
    const model = await blog.create(req.body);
    res.send(model);
  })
  router.get("/listBlog", async (req, res) => {
    const model = await blog.find().populate('labels', 'label').populate('commentList').sort({
      updatedAt: 1
    });
    res.send(model);
  })
  router.get("/getBlogById/:id", async (req, res) => {
    const model = await blog.findById(req.params.id).populate('commentList').populate('labels').lean();
    res.send(model);
  })
  router.put("/updateBlogById/:id", async (req, res) => {
    const model = await blog.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  })

  router.delete("/delBlogById/:id", async (req, res) => {
    const id = req.params.id
    const model = await blog.findByIdAndDelete(id);
    res.send({
      success: true
    });
  })
  const multer = require("multer");
  const upload = multer({
    dest: __dirname + "../../../uploads"
  });
  app.post("/ly/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`;
    res.send(file);
  });
  app.use("/ly/api", router)
};