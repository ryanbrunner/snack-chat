var Post = require('./model');

module.exports = {
  listPosts: (req, res, next) => {
    Post.find().exec()
    .then(records => res.send(records)).catch(next);
  },

  createPost: (req, res, next) => {
    const post = new Post(req.body);
    post.save().then(() => {
      console.log("Emitting IO!")
      req.io.emit('post-created', post);
      res.send(post)
    }).catch(next);
  }
}