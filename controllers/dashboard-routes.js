const router = require("express").Router();
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// route to find all

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attribute: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then(postData => {
      const posts = postData.map(post => post.get({plain:true }))
       res.render('dashboard', { posts,loggedIn:true});
  }).catch(err => {
      console.log(err)
      res.status(500).json(err)
  })
});
module.exports = router;