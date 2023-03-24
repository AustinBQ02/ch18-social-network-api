const router = require('express').Router();
const {
  getUsers,
  getOneUser,
  createUser,

} = require('../../controllers/users');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getOneUser);

module.exports = router;