const { post } = require('../models');

const writing = async (req,res) => {
  const { nickname, text } = req.body;
  try {
    if(req.file !== undefined) file = req.file.originalname;
    await post.create({
      nickname: nickname,
      text: text,
      img: file,
    });
    res.status(200).json({ message: "success" });
  }
  catch(err) {
    res.status(404).json({ message: err })
  }
}

const upload = (req,res) => {
  try {
    const numberOfRequest = req.body.numberOfRequest;
    const post = await post.findAll({
      offset: numberOfRequest*10-10,
      limit: numberOfRequest*10-1
    });
    res.status(200).json({ message: "success", post});
  }
  catch (err) {
    res.status(404).json({ message: err });
  }
}

const like = (req,res) => {
  const id = req.body.id;
  try {
    post.update({
      like: req.body.like + 1,
    }, {
      where: {id:id}
    });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

module.exports = {
  writing,
  upload,
  like
}
