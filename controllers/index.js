const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');


router.use('/', homeRoutes);
// router.use((req, res) => {
//     res.status(404).end();
// });
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;