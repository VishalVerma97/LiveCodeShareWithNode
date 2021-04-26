const router = require('express').Router();
const userRouter = require('./user/routes');
const authRouter = require('./auth/routes');
const homeRouter = require('./home/routes');

router.use('/api/auth', authRouter);
router.use('/api/user', userRouter);
// default route
router.use('/', homeRouter);

module.exports = router;