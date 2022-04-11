const { Comment } = require('../models');

const commentData = [{
        comment_text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque aliquam rerum eligendi tempore labore reiciendis molestiae autem dolore architecto quidem quaerat odit quibusdam voluptatum corrupti, maxime dicta, facilis, error velit?",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque aliquam rerum eligendi tempore labore reiciendis molestiae autem dolore architecto quidem quaerat odit quibusdam voluptatum corrupti, maxime dicta, facilis, error velit?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque aliquam rerum eligendi tempore labore reiciendis molestiae autem dolore architecto quidem quaerat odit quibusdam voluptatum corrupti, maxime dicta, facilis, error velit?",
        user_id: 3,
        post_id: 3
    }
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;