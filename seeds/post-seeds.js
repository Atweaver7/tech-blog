const { Post } = require('../models');
const postData = [{
        title: 'Test',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque aliquam rerum eligendi tempore labore reiciendis molestiae autem dolore architecto quidem quaerat odit quibusdam voluptatum corrupti, maxime dicta, facilis, error velit?',
        user_id: 1
    },
    {
        title: 'Test',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque aliquam rerum eligendi tempore labore reiciendis molestiae autem dolore architecto quidem quaerat odit quibusdam voluptatum corrupti, maxime dicta, facilis, error velit?',
        user_id: 2
    },
    {
        title: 'Test',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque aliquam rerum eligendi tempore labore reiciendis molestiae autem dolore architecto quidem quaerat odit quibusdam voluptatum corrupti, maxime dicta, facilis, error velit?',
        user_id: 3
    }
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;