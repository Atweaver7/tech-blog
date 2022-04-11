const { User } = require('../models');
const userData = [{
        username: 'test',
        password: 'test'
    },
    {
        username: 'test',
        password: 'test'
    },
    {
        username: 'test',
        password: 'test'
    }
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;