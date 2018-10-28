const router = require('express').Router();
const articleRoutes = require('./article');
const saveRoutes = require('./save');

router.use('/saved', saveRoutes);
router.use('/article', articleRoutes);

module.exports = router;