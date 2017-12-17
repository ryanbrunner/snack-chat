var Post = require('./model');

module.exports = {
  listPosts: (req, res) => {
    Post.find().populate('user').exec()
    .then(records => res.send(records));
  },

  createPost: (io) => {
    return (req, res) => {
      const post = new Post(req.body);
      post.save().then(() => {
        io.emit('post-created', post);
        res.send(post)
      });
    }
  }
}