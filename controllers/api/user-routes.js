const router = require('express').Router();
const { User } = require('../../models');

// route to get User's

// router.get('/', (req, res) => {
//     User.findAll({
//             attributes: { exclude: ['[password'] }
//         })
//         .then(dbUserData => res.json(dbUserData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.get('/:id', (req, res) => {
//     User.findOne({
//             attributes: { exclude: ['password'] },
//             where: {
//                 id: req.params.id
//             },
//             include: [{
//                     model: Post,
//                     attributes: [
//                         'id',
//                         'title',
//                         'content',
//                         'created_at'
//                     ]
//                 },
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'created_at'],
//                     include: {
//                         model: Post,
//                         attributes: ['title']
//                     }
//                 },
//                 {
//                     model: Post,
//                     attributes: ['title'],
//                 }
//             ]
//         })
//         .then(dbUserData => {
//             if (!dbUserData) {
//                 res.status(404).json({ message: 'No user found with this id' });
//                 return;
//             }
//             res.json(dbUserData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// route for creating post routes

router.post('/', async (req, res) => {

    try{
        const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
        });

   
            req.session.save(() => {
                req.session.user_id = newUser.id;
                req.session.username = newUser.username;
                req.session.loggedIn = true;

                res.json(newUser);
                console.log(newUser)
            });
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        };

        
});

// logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/login', async (req, res) => {
    try{ 
        const userName = await User.findOne({
            where: {
                username: req.body.username
            }
        })
            if (!userName) {
                res.status(400).json({ message: 'No user with that username!' });
                return;
            }
            const validPassword = userName.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
            }
            req.session.save(() => {

                req.session.user_id = userName.id;
                req.session.username = userName.username;
                req.session.loggedIn = true;

                res.json({ user: userName, message: 'You are now logged in!' });
            });
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        };
});


// Route to create user

router.put('/:id', (req, res) => {

    User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// // route to delete user by ID

// router.delete('/:id', (req, res) => {
//     User.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(dbUserData => {
//             if (!dbUserData) {
//                 res.status(404).json({ message: 'No user found with this id' });
//                 return;
//             }
//             res.json(dbUserData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });
module.exports = router;