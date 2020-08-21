const post = require('../models').Post;

const writing = async (req,res) => {
  const { nickname, text } = req.body;
  let file;
  try {
    if(req.file !== undefined) {
      file = req.file.originalname 
    };
    await post.create({
      nickname: nickname,
      text: text,
      img: file,
    });
    res.status(200).json({ message: "success" });
  }
  catch(err) {
    res.status(404).json({ message: err.message })
  }
}

const upload = async (req,res) => {
  try {
    const numberOfRequest = req.body.numberOfRequest;
    const Post = await post.findAll({
      offset: numberOfRequest*10-10,
      limit: 10
    });
    console.log(Post);
    res.status(200).json({ message: "success", Post});
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

const like = async (req,res) => {
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
